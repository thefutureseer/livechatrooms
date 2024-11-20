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

export interface MessageFieldProps {
  roomId: string
}

export interface Message {
  id: string;
  text: string;
  sender: 'playerOne' | 'playerTwo';  // Add sender type to differentiate
}