import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findUniqueTagQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereUniqueInput, required: true }),
}));

export const findUniqueTagQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Tag',
    nullable: true,
    args: findUniqueTagQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueTagQuery = defineQuery((t) => ({
  findUniqueTag: t.prismaField(findUniqueTagQueryObject(t)),
}));
