import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const createOneContributorMutationArgs = builder.args((t) => ({
  data: t.field({ type: Inputs.ContributorCreateInput, required: true }),
}));

export const createOneContributorMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Contributor',
    nullable: false,
    args: createOneContributorMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.create({ data: args.data, ...query }),
  }),
);

export const createOneContributorMutation = defineMutation((t) => ({
  createOneContributor: t.prismaField(createOneContributorMutationObject(t)),
}));
