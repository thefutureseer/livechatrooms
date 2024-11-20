"use client";

import {pusherClient} from "../../lib/pusher";
import { FC, useEffect, useState } from "react";
import { MessageProps } from "../types/types";

const Messages: FC<MessageProps> = ({initialMessages, roomId}) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([]);

  useEffect(()=>{
    pusherClient.subscribe(roomId);

    pusherClient.bind('incoming-message', (text:string) => {
      setIncomingMessages((prev)=>[...prev, text]);
    });

    return () => {
      pusherClient.subscribe(roomId);
    }
  }, []);

  return (
      //loop initial Messages & incomming messges
    <div className="space-y-4">
     {initialMessages.map((message)=> (
      <p className="p-4" key={message.id}>{message.text}</p>
     ))}

     {incomingMessages.map((text, i)=>(
      <p className="p-4" key={i}>{text}</p>
     ))}
    </div>
  );
};
export default Messages;