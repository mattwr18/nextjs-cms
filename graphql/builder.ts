import path from 'path';
import SchemaBuilder from '@pothos/core';
// import { Scalars } from 'prisma-generator-pothos-codegen';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import PrismaPlugin from '@pothos/plugin-prisma';
import prisma from '@/app/lib/prisma';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
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
