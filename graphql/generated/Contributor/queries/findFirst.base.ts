import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findFirstContributorQueryArgs = builder.args((t) => ({
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

export const findFirstContributorQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Contributor',
    nullable: true,
    args: findFirstContributorQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.findFirst({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findFirstContributorQuery = defineQuery((t) => ({
  findFirstContributor: t.prismaField(findFirstContributorQueryObject(t)),
}));
