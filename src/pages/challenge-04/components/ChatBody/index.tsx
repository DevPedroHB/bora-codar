import { useMessage } from "@/hooks/useMessage";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useRef } from "react";
import Nl2br from "react-nl2br";
import { ChatBodyContainer, Message } from "./styles";

export function ChatBody() {
  const { messages } = useMessage();
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
            <span>
              {formatDistanceToNow(new Date(message.date), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </span>
          <p>{Nl2br(message.message)}</p>
        </Message>
      ))}
    </ChatBodyContainer>
  );
}
