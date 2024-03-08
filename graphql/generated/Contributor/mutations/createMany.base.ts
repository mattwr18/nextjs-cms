import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createManyContributorMutationArgs = builder.args((t) => ({
  data: t.field({ type: [Inputs.ContributorCreateInput], required: true }),
}));

export const createManyContributorMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Contributor'],
    nullable: false,
    args: createManyContributorMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(
        args.data.map((data) => prisma.contributor.create({ data })),
      ),
  }),
);

export const createManyContributorMutation = defineMutation((t) => ({
  createManyContributor: t.prismaField(createManyContributorMutationObject(t)),
}));
