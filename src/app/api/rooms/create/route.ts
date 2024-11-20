import {db} from '../../../../lib/connectDb';

 //connect to prisma db
 export async function POST() {
  try {
    const createdRoom = await db.chatroom.create({
      //creating empty chatroom
      data: {}, 
    });
    // Return the created chatroom ID as a response
    return new Response(JSON.stringify({ chatroomId: createdRoom.id }), {
      status: 200, // Set status code to OK
    });
  } catch(err) {
    console.error(err);
    return new Response('Error creating chatroom', { status: 500 });
  }
 }