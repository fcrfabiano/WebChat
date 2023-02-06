interface MessageProps {
  you?: boolean;
  user: string;
  message: string;
}

export function Message({ you, user, message }: MessageProps) {
  return (
    <div className={`message-container ${you ? "you" : ""}`}>
      <span>{ user }</span>
      <div className="message">
        <span>{ message }</span>
      </div>
    </div>
  );
}
