import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteManyRequestMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereInput, required: true }),
}));

export const deleteManyRequestMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyRequestMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.request.deleteMany({ where: args.where }),
  }),
);

export const deleteManyRequestMutation = defineMutation((t) => ({
  deleteManyRequest: t.field(deleteManyRequestMutationObject(t)),
}));
