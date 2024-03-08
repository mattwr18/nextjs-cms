import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createOneRequestMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.RequestCreateInput, required: true }),
}));

export const createOneRequestMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Request',
    nullable: false,
    args: createOneRequestMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.create({ data: args.data, ...query }),
  }),
);

export const createOneRequestMutation = defineMutation((t) => ({
  createOneRequest: t.prismaField(createOneRequestMutationObject(t)),
}));
