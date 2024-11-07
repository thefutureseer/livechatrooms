"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { PageProps } from "../types/types"

const JoinRoom = () =>{
  let roomIdInput = ''
  const router = useRouter();
  

  //send user to room
  const joinRoom = (roomId: string) =>{
    router.push(`/room/${roomId}`)
  };

 return (
  <div>
    <input 
      className=" placeholder-grey-200 p-5" 
      onChange={({target})=> (roomIdInput = target.value)} 
      placeholder="ENTER ROOM CODE"
      type="text"
    >
    </input>
    <button className="p-3 ml-4 bg-spaceBlack" onClick={()=>joinRoom(roomIdInput)}>CLICK TO JOIN ROOM</button>
  </div>
 )
};

export default JoinRoom;