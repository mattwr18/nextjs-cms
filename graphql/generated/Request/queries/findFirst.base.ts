import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findFirstRequestQueryArgs = builder.args((t) => ({
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

export const findFirstRequestQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Request',
    nullable: true,
    args: findFirstRequestQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.findFirst({
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

export const findFirstRequestQuery = defineQuery((t) => ({
  findFirstRequest: t.prismaField(findFirstRequestQueryObject(t)),
}));
