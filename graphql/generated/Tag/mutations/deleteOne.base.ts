import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const deleteOneTagMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereUniqueInput, required: true }),
}));

export const deleteOneTagMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Tag',
    nullable: true,
    args: deleteOneTagMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneTagMutation = defineMutation((t) => ({
  deleteOneTag: t.prismaField(deleteOneTagMutationObject(t)),
}));
