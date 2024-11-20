import { Content } from 'next/font/google';
import { headers } from 'next/headers';
import PusherServer from 'pusher';
import PusherClient from 'pusher-js';
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: 'eu',
  useTLS: true,
})

export const pusherClient = new PusherClient("6ca54d0b0e25049170b5", {
  cluster: "us3",
  authEndpoint: "/api/pusher-auth",
  authTransport: "ajax",
  auth: {
    headers: {
      "Content-Type": "application/json"
    }
  }
})