import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteOneContributorMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereUniqueInput, required: true }),
}));

export const deleteOneContributorMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Contributor',
    nullable: true,
    args: deleteOneContributorMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneContributorMutation = defineMutation((t) => ({
  deleteOneContributor: t.prismaField(deleteOneContributorMutationObject(t)),
}));
