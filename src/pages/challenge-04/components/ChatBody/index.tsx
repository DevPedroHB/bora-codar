import { chatDefaultMessages } from "@/utils/chat-default-messages";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import { ChatBodyContainer, Message } from "./styles";

interface IChatBody {
  messages: typeof chatDefaultMessages;
}

export function ChatBody({ messages }: IChatBody) {
  const MessageRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    if (MessageRef.current) {
      MessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ChatBodyContainer>
      <div>Hoje</div>
      {messages.map((message) => (
        <Message
          key={message.id}
          you={message.author === "Você"}
          ref={MessageRef}
        >
          <span>
            {message.author} -{" "}
            <span>{dayjs(message.date).format("HH-mm")}</span>
          </span>
          <p>{message.message}</p>
        </Message>
      ))}
    </ChatBodyContainer>
  );
}
