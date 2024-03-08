import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findManyTagQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.TagWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.TagOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.TagWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.TagScalarFieldEnum], required: false }),
}));

export const findManyTagQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Tag'],
    nullable: false,
    args: findManyTagQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.tag.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyTagQuery = defineQuery((t) => ({
  findManyTag: t.prismaField(findManyTagQueryObject(t)),
}));
