import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteOneRequestMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereUniqueInput, required: true }),
}));

export const deleteOneRequestMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Request',
    nullable: true,
    args: deleteOneRequestMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRequestMutation = defineMutation((t) => ({
  deleteOneRequest: t.prismaField(deleteOneRequestMutationObject(t)),
}));
