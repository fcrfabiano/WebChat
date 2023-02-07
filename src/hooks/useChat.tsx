import { randomUUID } from "crypto";
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useMemo,
  FormEvent,
} from "react";
import { generate } from "../services/api";
import { getTime } from "../utils/getTime";

interface Messages {
  key: string;
  author: string;
  time: string | number;
  text: string;
}

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatContext = createContext([] as any);

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!message) return;

    setMessages((prevState) => [
      ...prevState,
      {
        key: crypto.randomUUID(),
        author: "You",
        time: getTime(),
        text: message,
      },
    ]);

    const completion = {
      prompt: message,
      model: "text-davinci-003",
      max_tokens: 100,
      temperature: 1,
    };

    setMessage("");

    try {
      const data = await generate(completion);

      setMessages((prevState) => [
        ...prevState,
        {
          key: data.id,
          author: "ChatGPT",
          time: new Date(data.created).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          text: data.choices.map((choice) => choice.text).join(" "),
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, onSubmit, message, setMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
