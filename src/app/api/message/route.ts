import {db} from '../../../lib/connectDb';
import {pusherServer} from '../../../lib/pusher';

export async function POST(req:Request) {
  const {text, roomId} = await req.json();

  pusherServer.trigger(roomId, 'incoming-message', text);

  await db.message.create({
    data: {
      text,
      chatroomid: roomId
    }
  });

  return new Response(JSON.stringify({success: true}));
  
};