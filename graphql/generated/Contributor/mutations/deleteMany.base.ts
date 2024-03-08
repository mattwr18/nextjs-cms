import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteManyContributorMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereInput, required: true }),
}));

export const deleteManyContributorMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyContributorMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.contributor.deleteMany({ where: args.where }),
  }),
);

export const deleteManyContributorMutation = defineMutation((t) => ({
  deleteManyContributor: t.field(deleteManyContributorMutationObject(t)),
}));
