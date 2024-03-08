import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteManyTagMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereInput, required: true }),
}));

export const deleteManyTagMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyTagMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.tag.deleteMany({ where: args.where }),
  }),
);

export const deleteManyTagMutation = defineMutation((t) => ({
  deleteManyTag: t.field(deleteManyTagMutationObject(t)),
}));
