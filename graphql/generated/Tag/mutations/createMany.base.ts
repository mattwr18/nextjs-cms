import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createManyTagMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.TagCreateInput], required: true }),
}));

export const createManyTagMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Tag'],
    nullable: false,
    args: createManyTagMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.tag.create({ data })),
      ),
  }),
);

export const createManyTagMutation = defineMutation((t) => ({
  createManyTag: t.prismaField(createManyTagMutationObject(t)),
}));
