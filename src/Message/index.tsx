interface MessageProps {
  author: string;
  text: string;
  time: string | number;
}

export function Message({ author, text, time }: MessageProps) {
  return (
    <div className={`message-container ${author === "You" ? "you" : ""}`}>
      <span>{ `${author} - ${time}` }</span>
      <div className="message">
        <span>{ text }</span>
      </div>
    </div>
  );
}
