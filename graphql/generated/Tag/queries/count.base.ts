import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const countTagQueryArgs = builder.args((t) => ({
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

export const countTagQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countTagQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.tag.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countTagQuery = defineQuery((t) => ({
  countTag: t.field(countTagQueryObject(t)),
}));
