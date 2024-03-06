import { PrismaClient } from '@prisma/client';
import { users, contributors, requests } from '../app/lib/placeholder-data';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  users.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  });
  await prisma.contributor.createMany({ data: contributors });
  await prisma.request.createMany({ data: requests });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
