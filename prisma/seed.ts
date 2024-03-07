import { PrismaClient } from '@prisma/client';
import {
  users,
  tags,
  contributors,
  requests,
} from '../app/lib/placeholder-data';
import bcrypt from 'bcrypt';
import { parseArgs } from 'node:util';

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
    case 'users':
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await prisma.user.create({
          data: {
            ...user,
            password: hashedPassword,
          },
        });
      });
      break;
    case 'tags':
      await prisma.$transaction(
        tags.map((tag) =>
          prisma.tag.upsert({
            where: { name: tag.name },
            update: {},
            create: { name: tag.name },
          }),
        ),
      );
      break;
    case 'contributors':
      contributors.map(async (contributor) => {
        await prisma.contributor.create({ data: contributor });
      });
      break;
    case 'requests':
      const user = await prisma.user.findFirstOrThrow();
      requests.map(async (request) => {
        await prisma.$connect();
        await prisma.request.create({
          data: {
            ...request,
            user: { connect: { id: user.id } },
          },
        });
        await prisma.$disconnect();
      });
    default:
      break;
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
