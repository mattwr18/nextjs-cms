import * as Inputs from '../../inputs';
import { builder } from '../../../builder';
import {
  defineMutation,
  defineMutationFunction,
  defineMutationPrismaObject,
} from '../../utils';
import prisma from '@/app/lib/prisma';

export const upsertOneContributorMutationArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.ContributorWhereUniqueInput, required: true }),
  create: t.field({ type: Inputs.ContributorCreateInput, required: true }),
  update: t.field({ type: Inputs.ContributorUpdateInput, required: true }),
}));

export const upsertOneContributorMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Contributor',
    nullable: false,
    args: upsertOneContributorMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.contributor.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneContributorMutation = defineMutation((t) => ({
  upsertOneContributor: t.prismaField(upsertOneContributorMutationObject(t)),
}));
