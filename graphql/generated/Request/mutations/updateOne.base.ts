import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateOneRequestMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.RequestUpdateInput, required: true }),
}));

export const updateOneRequestMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Request',
    nullable: true,
    args: updateOneRequestMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.update({
        where: args.where,
        data: args.data,
        ...query,
      }),
  }),
);

export const updateOneRequestMutation = defineMutation((t) => ({
  updateOneRequest: t.prismaField(updateOneRequestMutationObject(t)),
}));
