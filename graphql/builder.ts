import path from 'path';
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaUtils from '@pothos/plugin-prisma-utils';
import PothosPrismaGeneratorPlugin from 'pothos-prisma-generator';
import PothosSchemaExporter from 'pothos-schema-exporter';
import prisma from '@/app/lib/prisma';

export const builder = new SchemaBuilder<{}>({
  plugins: [
    PrismaPlugin,
    PrismaUtils,
    PothosPrismaGeneratorPlugin,
    PothosSchemaExporter,
  ],
  prisma: {
    client: prisma,
  },
  pothosSchemaExporter: {
    output:
      process.env.NODE_ENV === 'development' &&
      path.join(process.cwd(), 'graphql', 'schema.graphql'),
  },
});
