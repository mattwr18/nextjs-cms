import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const countContributorQueryArgs = builder.args((t) => ({
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

export const countContributorQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countContributorQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.contributor.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countContributorQuery = defineQuery((t) => ({
  countContributor: t.field(countContributorQueryObject(t)),
}));
