"use client"
import { useRouter } from "next/navigation";
import {validate as validateUUID} from "uuid";


const CreateRoom = () => {
  const router = useRouter();

  const createTheRoom = async () => {
    try {
      const res = await fetch("/api/rooms/create", { method: "POST" });
      console.log("Response received:", res);

      if (!res.ok) {
        throw new Error("Failed to create the room");
      }

      const roomId = await res.text();

      // Validate UUID before pushing
      if (!validateUUID(roomId)) {
        throw new Error(`Invalid roomId received: ${roomId}`);
      }

      router.push(`/room/${roomId}`);
    } catch (error) {
      console.error("Error creating room:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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