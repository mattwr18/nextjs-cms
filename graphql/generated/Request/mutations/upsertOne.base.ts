import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const upsertOneRequestMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.RequestCreateInput, required: true }),
  update: t.field({ type: Inputs.RequestUpdateInput, required: true }),
}));

export const upsertOneRequestMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Request',
    nullable: false,
    args: upsertOneRequestMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneRequestMutation = defineMutation((t) => ({
  upsertOneRequest: t.prismaField(upsertOneRequestMutationObject(t)),
}));
