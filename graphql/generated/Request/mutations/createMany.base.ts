import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createManyRequestMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.RequestCreateInput], required: true }),
}));

export const createManyRequestMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Request'],
    nullable: false,
    args: createManyRequestMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.request.create({ data })),
      ),
  }),
);

export const createManyRequestMutation = defineMutation((t) => ({
  createManyRequest: t.prismaField(createManyRequestMutationObject(t)),
}));
