"use client"
import { useRouter } from "next/navigation";

const CreateRoom = () => {
  let inputID = '';

  const router = useRouter();

  const createTheRoom = async () => {
    //fetch api to create rooom
    const res = await fetch('api/rooms/create');
    //get the id to push into the route
    const roomId: string = await res.text();
    //push id into the route
    router.push(`/room/${roomId}`);
  }

  return ( 
    <div>
      <div>      
        <button className="shadow-glow-blue p-10" onClick={createTheRoom}>
          <p className="animate-float text-center text-2xl">{"↓"}
          </p>
            <div className="mx-auto w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-600"></div>
          CREATE A ROOM
        </button>
      </div>
    </div>
   )

}

export default CreateRoom;