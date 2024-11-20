import Messages from "../../components/Messages";
import MessageField from "../../components/MessageField";
import { validate as validateUUID } from 'uuid';
import { db } from '../../../lib/connectDb';
import { PageProps } from '../../types/types';

export interface Message {
  id: string;
  text: string;
  sender: 'playerOne' | 'playerTwo';  // Add sender type to differentiate
}

const page = async ({ params }: PageProps) => {
  const { roomId } = params;
  const existingMessages = await db.message.findMany({
    where: {
      chatroomid: roomId,
    },
  });
  // Validate roomId
  if (!validateUUID(roomId)) {
    throw new Error(`Invalid roomId: ${roomId}`);
  }

  if (existingMessages.length === 0) {
    // Add a default welcome message if no messages exist
    await db.message.create({
      data: {
        text: 'Welcome to the chat room!',
        chatroomid: roomId,
      },
    });
  };

  const updatedMessages = await db.message.findMany({
    where: {
      chatroomid: roomId,
    },
  });

  const serializedMessages = updatedMessages.map((message) => ({
    text: message.text,
    id: message.id,
  }))
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-200 to-black text-white">
      <div className="flex flex-col items-center py-12 px-6 space-y-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-gray-700 relative">
          Welcome to the Cosmic Connection
        </h1>
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-3xl shadow-xl bg-opacity-80 backdrop-blur-md">
          <div className="space-y-6 ">
            <p className="text-center text-xl text-gray-300">Chatroom messages:</p>
            <Messages roomId={roomId} initialMessages={serializedMessages} />
          </div>
          <div className="mt-8">
            <MessageField roomId={roomId} />
          </div>
        </div>
      </div>
      <footer className="absolute w-full text-center text-sm text-gray-400">
        <p>Powered by Stellar Tannehill Technologies</p>
      </footer>
    </div>
  );
}

export default page