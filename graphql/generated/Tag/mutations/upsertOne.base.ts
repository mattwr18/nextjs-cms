import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const upsertOneTagMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.TagCreateInput, required: true }),
  update: t.field({ type: Inputs.TagUpdateInput, required: true }),
}));

export const upsertOneTagMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Tag',
    nullable: false,
    args: upsertOneTagMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneTagMutation = defineMutation((t) => ({
  upsertOneTag: t.prismaField(upsertOneTagMutationObject(t)),
}));
