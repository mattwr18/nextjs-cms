import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateOneContributorMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.ContributorUpdateInput, required: true }),
}));

export const updateOneContributorMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Contributor',
    nullable: true,
    args: updateOneContributorMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  }),
);

export const updateOneContributorMutation = defineMutation((t) => ({
  updateOneContributor: t.prismaField(updateOneContributorMutationObject(t)),
}));
