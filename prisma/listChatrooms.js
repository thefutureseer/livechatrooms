import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Fetch all chatrooms
  const chatrooms = await prisma.chatroom.findMany({
    select: {
      id: true, // Only retrieve the ID field
    },
  });

  if (chatrooms.length === 0) {
    console.log('No chatrooms found in the database.');
  } else {
    console.log('List of Chatroom IDs:');
    chatrooms.forEach((chatroom, index) => {
      console.log(`${index + 1}: ${chatroom.id}`);
    });
  }
}

main()
  .catch((e) => {
    console.error('Error fetching chatrooms:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });