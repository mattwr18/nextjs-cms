import * as Inputs from '../inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const TagObject = definePrismaObject('Tag', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(TagIdFieldObject),
    name: t.field(TagNameFieldObject),
    created_at: t.field(TagCreated_atFieldObject),
    updated_at: t.field(TagUpdated_atFieldObject),
    contributors: t.relation('contributors', TagContributorsFieldObject(t)),
    requests: t.relation('requests', TagRequestsFieldObject(t)),
  }),
});

export const TagIdFieldObject = defineFieldObject('Tag', {
  type: 'ID',
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const TagNameFieldObject = defineFieldObject('Tag', {
  type: 'String',
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const TagCreated_atFieldObject = defineFieldObject('Tag', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.created_at,
});

export const TagUpdated_atFieldObject = defineFieldObject('Tag', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updated_at,
});

export const TagContributorsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.ContributorOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({
    type: Inputs.ContributorWhereUniqueInput,
    required: false,
  }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({
    type: [Inputs.ContributorScalarFieldEnum],
    required: false,
  }),
}));

export const TagContributorsFieldObject = defineRelationFunction('Tag', (t) =>
  defineRelationObject('Tag', 'contributors', {
    description: undefined,
    nullable: false,
    args: TagContributorsFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);

export const TagRequestsFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.RequestOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.RequestWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RequestScalarFieldEnum], required: false }),
}));

export const TagRequestsFieldObject = defineRelationFunction('Tag', (t) =>
  defineRelationObject('Tag', 'requests', {
    description: undefined,
    nullable: false,
    args: TagRequestsFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
