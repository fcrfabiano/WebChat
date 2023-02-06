import { useRef, useEffect } from 'react';
import { Message } from "../Message";
import { useChat } from '../hooks/useChat';

export function Main() {
  const messagesElement = useRef<HTMLDivElement | null>(null);
  const {
    messages,
  } = useChat();


  useEffect(() => {
    messagesElement.current?.lastElementChild?.scrollIntoView();
  });

  return (
    <div className="main" ref={messagesElement}>
      {
        messages.map((message: any) => (
          <Message
            {...message}
          />
        ))
      }
    </div>
  );
}
