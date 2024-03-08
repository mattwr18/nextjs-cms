import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createOneTagMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.TagCreateInput, required: true }),
}));

export const createOneTagMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Tag',
    nullable: false,
    args: createOneTagMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.create({ data: args.data, ...query }),
  }),
);

export const createOneTagMutation = defineMutation((t) => ({
  createOneTag: t.prismaField(createOneTagMutationObject(t)),
}));
