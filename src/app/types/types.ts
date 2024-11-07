export interface PageProps {
  params: {
    roomId: string
  }
}

export interface MessageProps {
  initialMessages: {
    text: string
    id: string
  }[]
  roomId: string
}