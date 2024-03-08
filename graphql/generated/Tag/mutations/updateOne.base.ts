import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const updateOneTagMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereUniqueInput, required: true }),
  data: t.field({ type: Inputs.TagUpdateInput, required: true }),
}));

export const updateOneTagMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Tag',
    nullable: true,
    args: updateOneTagMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneTagMutation = defineMutation((t) => ({
  updateOneTag: t.prismaField(updateOneTagMutationObject(t)),
}));
