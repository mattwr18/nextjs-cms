import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const countRequestQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereInput, required: false }),
  orderBy: t.field({
    type: [Inputs.RequestOrderByWithRelationInput],
    required: false,
  }),
  cursor: t.field({ type: Inputs.RequestWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RequestScalarFieldEnum], required: false }),
}));

export const countRequestQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countRequestQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.request.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countRequestQuery = defineQuery((t) => ({
  countRequest: t.field(countRequestQueryObject(t)),
}));
