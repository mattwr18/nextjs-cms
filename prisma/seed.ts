import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { parseArgs } from 'node:util';
import {
  users,
  tags,
  emailContributors,
  telegramContributors,
  signalContributors,
  whatsAppContributors,
  sentRequests,
  plannedRequests,
} from '../app/lib/placeholder-data';

const prisma = new PrismaClient();

const options = {
  model: {
    type: 'string',
  },
} as const;

async function main() {
  const {
    values: { model },
  } = parseArgs({ options });

  switch (model) {
    case 'users': {
      await Promise.all([
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          await prisma.user.create({
            data: {
              ...user,
              password: hashedPassword,
            },
          });
        }),
      ]);
      break;
    }
    case 'tags':
      await prisma.$transaction(
        tags.map((tag) =>
          prisma.tag.upsert({
            where: { name: tag.name },
            update: {},
            create: { name: tag.name, id: tag.id },
          }),
        ),
      );
      break;
    case 'contributors': {
      await Promise.all([
        emailContributors.map(
          async (contributor) =>
            await prisma.contributor.create({ data: contributor }),
        ),
        telegramContributors.map(
          async (contributor) =>
            await prisma.contributor.create({ data: contributor }),
        ),
        signalContributors.map(
          async (contributor) =>
            await prisma.contributor.create({ data: contributor }),
        ),
        whatsAppContributors.map(
          async (contributor) =>
            await prisma.contributor.create({ data: contributor }),
        ),
      ]);
      break;
    }
    case 'requests': {
      const user = await prisma.user.findFirstOrThrow();
      await Promise.all([
        sentRequests.map(async (request) => {
          await prisma.$connect();
          await prisma.request.create({
            data: {
              ...request,
              user: { connect: { id: user.id }},
            },
          });
          await prisma.$disconnect();
        }),
        plannedRequests.map(async (request) => {
          await prisma.$connect();
          await prisma.request.create({
            data: {
              ...request,
              user: { connect: { id: user.id } },
            },
          });
          await prisma.$disconnect();
        }),
      ]);
      break;
    }
    default:
      break;
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
