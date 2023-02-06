import { useContext, createContext, ReactNode, useState, useMemo } from "react";

interface Messages {
  author: string;
  time: string;
  message: string;
}

interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext([] as any);

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState([]);

  return (
    <ChatContext.Provider value={{ messages }}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}