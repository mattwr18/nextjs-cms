import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateManyTagMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereInput, required: false }),
  data: t.field({ type: Inputs.TagUpdateManyMutationInput, required: true }),
}));

export const updateManyTagMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyTagMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.tag.updateMany({
        where: args.where || undefined,
        data: args.data,
      }),
  }),
);

export const updateManyTagMutation = defineMutation((t) => ({
  updateManyTag: t.field(updateManyTagMutationObject(t)),
}));
