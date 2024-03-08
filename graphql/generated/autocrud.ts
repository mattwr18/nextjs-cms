import * as User from './User';
import * as Tag from './Tag';
import * as Contributor from './Contributor';
import * as Request from './Request';
import { builder } from '@/graphql/builder';
import * as Objects from './objects';

type Model = Objects.Model;

export const Cruds: Record<
  Objects.Model,
  {
    Object: any;
    queries: Record<string, Function>;
    mutations: Record<string, Function>;
  }
> = {
  User: {
    Object: User.UserObject,
    queries: {
      findFirst: User.findFirstUserQueryObject,
      findMany: User.findManyUserQueryObject,
      count: User.countUserQueryObject,
      findUnique: User.findUniqueUserQueryObject,
    },
    mutations: {
      createMany: User.createManyUserMutationObject,
      createOne: User.createOneUserMutationObject,
      deleteMany: User.deleteManyUserMutationObject,
      deleteOne: User.deleteOneUserMutationObject,
      updateMany: User.updateManyUserMutationObject,
      updateOne: User.updateOneUserMutationObject,
      upsertOne: User.upsertOneUserMutationObject,
    },
  },
  Tag: {
    Object: Tag.TagObject,
    queries: {
      findFirst: Tag.findFirstTagQueryObject,
      findMany: Tag.findManyTagQueryObject,
      count: Tag.countTagQueryObject,
      findUnique: Tag.findUniqueTagQueryObject,
    },
    mutations: {
      createMany: Tag.createManyTagMutationObject,
      createOne: Tag.createOneTagMutationObject,
      deleteMany: Tag.deleteManyTagMutationObject,
      deleteOne: Tag.deleteOneTagMutationObject,
      updateMany: Tag.updateManyTagMutationObject,
      updateOne: Tag.updateOneTagMutationObject,
      upsertOne: Tag.upsertOneTagMutationObject,
    },
  },
  Contributor: {
    Object: Contributor.ContributorObject,
    queries: {
      findFirst: Contributor.findFirstContributorQueryObject,
      findMany: Contributor.findManyContributorQueryObject,
      count: Contributor.countContributorQueryObject,
      findUnique: Contributor.findUniqueContributorQueryObject,
    },
    mutations: {
      createMany: Contributor.createManyContributorMutationObject,
      createOne: Contributor.createOneContributorMutationObject,
      deleteMany: Contributor.deleteManyContributorMutationObject,
      deleteOne: Contributor.deleteOneContributorMutationObject,
      updateMany: Contributor.updateManyContributorMutationObject,
      updateOne: Contributor.updateOneContributorMutationObject,
      upsertOne: Contributor.upsertOneContributorMutationObject,
    },
  },
  Request: {
    Object: Request.RequestObject,
    queries: {
      findFirst: Request.findFirstRequestQueryObject,
      findMany: Request.findManyRequestQueryObject,
      count: Request.countRequestQueryObject,
      findUnique: Request.findUniqueRequestQueryObject,
    },
    mutations: {
      createMany: Request.createManyRequestMutationObject,
      createOne: Request.createOneRequestMutationObject,
      deleteMany: Request.deleteManyRequestMutationObject,
      deleteOne: Request.deleteOneRequestMutationObject,
      updateMany: Request.updateManyRequestMutationObject,
      updateOne: Request.updateOneRequestMutationObject,
      upsertOne: Request.upsertOneRequestMutationObject,
    },
  },
};

const crudEntries = Object.entries(Cruds);

type ResolverType = 'Query' | 'Mutation';
function generateResolversByType(type: ResolverType, opts?: CrudOptions) {
  return crudEntries
    .filter(([modelName]) => includeModel(modelName, opts))
    .map(([modelName, config]) => {
      const resolverEntries = Object.entries(
        config[type === 'Query' ? 'queries' : 'mutations'],
      );

      return resolverEntries.map(([operationName, resolverObjectDefiner]) => {
        const resolverName = operationName + modelName;
        const isntPrismaFieldList = ['count', 'deleteMany', 'updateMany'];
        const isPrismaField = !isntPrismaFieldList.includes(operationName);

        const getFields = (t: any) => {
          const field = resolverObjectDefiner(t);
          const handledField = opts?.handleResolver
            ? opts.handleResolver({
                field,
                modelName: modelName as Model,
                operationName,
                resolverName,
                t,
                isPrismaField,
                type,
              })
            : field;

          return {
            [resolverName]: isPrismaField
              ? t.prismaField(handledField)
              : t.field(handledField),
          };
        };

        return type === 'Query'
          ? builder.queryFields((t) => getFields(t))
          : builder.mutationFields((t) => getFields(t));
      });
    });
}

export function generateAllObjects(opts?: CrudOptions) {
  return crudEntries
    .filter(([md]) => includeModel(md, opts))
    .map(([modelName, { Object }]) => {
      return builder.prismaObject(modelName as Model, Object); // Objects is all imports
    });
}

export function generateAllQueries(opts?: CrudOptions) {
  generateResolversByType('Query', opts);
}

export function generateAllMutations(opts?: CrudOptions) {
  generateResolversByType('Mutation', opts);
}

export function generateAllResolvers(opts?: CrudOptions) {
  generateResolversByType('Mutation', opts);
  generateResolversByType('Query', opts);
}

type CrudOptions = {
  include?: Model[];
  exclude?: Model[];
  /**
   * Caution: This is not type safe
   * Wrap all queries/mutations to override args, run extra code in resolve function (ie: throw errors, logs), apply plugins, etc.
   */
  handleResolver?: (props: {
    modelName: Model;
    field: any;
    operationName: string;
    resolverName: string;
    t: any;
    isPrismaField: boolean;
    type: ResolverType;
  }) => any;
};

const includeModel = (model: string, opts?: CrudOptions): boolean => {
  if (!opts) return true;
  if (opts.include) return opts.include.includes(model as Model);
  if (opts.exclude) return !opts.exclude.includes(model as Model);
  return true;
};

export function generateAllCrud(opts?: CrudOptions) {
  generateAllObjects(opts);
  generateAllQueries(opts);
  generateAllMutations(opts);
}
