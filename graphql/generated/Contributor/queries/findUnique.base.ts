import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findUniqueContributorQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereUniqueInput, required: true }),
}));

export const findUniqueContributorQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Contributor',
    nullable: true,
    args: findUniqueContributorQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueContributorQuery = defineQuery((t) => ({
  findUniqueContributor: t.prismaField(findUniqueContributorQueryObject(t)),
}));
