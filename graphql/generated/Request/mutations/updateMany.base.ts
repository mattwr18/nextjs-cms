import * as Inputs from '../../inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateManyRequestMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereInput, required: false }),
  data: t.field({
    type: Inputs.RequestUpdateManyMutationInput,
    required: true,
  }),
}));

export const updateManyRequestMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyRequestMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.request.updateMany({
        where: args.where || undefined,
        data: args.data,
      }),
  }),
);

export const updateManyRequestMutation = defineMutation((t) => ({
  updateManyRequest: t.field(updateManyRequestMutationObject(t)),
}));
