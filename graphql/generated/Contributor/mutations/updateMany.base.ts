import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateManyContributorMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereInput, required: false }),
  data: t.field({
    type: Inputs.ContributorUpdateManyMutationInput,
    required: true,
  }),
}));

export const updateManyContributorMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyContributorMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.contributor.updateMany({
        where: args.where || undefined,
        data: args.data,
      }),
  }),
);

export const updateManyContributorMutation = defineMutation((t) => ({
  updateManyContributor: t.field(updateManyContributorMutationObject(t)),
}));
