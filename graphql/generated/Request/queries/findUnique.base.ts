import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineQuery,
  defineQueryFunction,
  defineQueryPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const findUniqueRequestQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RequestWhereUniqueInput, required: true }),
}));

export const findUniqueRequestQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Request',
    nullable: true,
    args: findUniqueRequestQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.request.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueRequestQuery = defineQuery((t) => ({
  findUniqueRequest: t.prismaField(findUniqueRequestQueryObject(t)),
}));
