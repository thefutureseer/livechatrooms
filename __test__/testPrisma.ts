// testPrisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
  const chatrooms = await prisma.chatroom.findMany();  // Example query
  console.log(chatrooms);
}

test().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
