"use client"

import axios from 'axios';
import { FC } from 'react';
import { MessageFieldProps } from '../types/types';

const MessageField: FC<MessageFieldProps> = ({roomId}) => {
  let input = "";

  const sendMessage = async (text: string) => {
    await axios.post('/api/message', {text, roomId})
  }

  return (
    <div className='flex gap-2'>
      Type a new message:
      <input
       className='bg-transparent'
       onChange={({target})=>(input = target.value)}
       type='text'
       placeholder='message'
      ></input>
      <button onClick={()=> sendMessage(input || '')}>send</button>
    </div>
  )
}

export default MessageField;