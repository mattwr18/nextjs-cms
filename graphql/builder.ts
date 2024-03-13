import SchemaBuilder from '@pothos/core';
import { Scalars } from 'prisma-generator-pothos-codegen';
import type PrismaTypes from '@/prisma/pothos-types';
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from '@/app/lib/prisma';
import { Prisma } from '.prisma/client';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<
    Prisma.Decimal,
    Prisma.InputJsonValue | null,
    Prisma.InputJsonValue
  >;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
    // warn when not using a query parameter correctly
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});
