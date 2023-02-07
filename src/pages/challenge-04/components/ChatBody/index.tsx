import { useMessage } from "@/hooks/useMessage";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
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
          <p>
            <SyntaxHighlighter
              language="typescript"
              style={dracula}
              customStyle={{
                background: "transparent",
                padding: 0,
                color: "#E1E1E6",
                fontFamily: "Fira Code, monospace",
              }}
            >
              {message.message}
            </SyntaxHighlighter>
          </p>
        </Message>
      ))}
    </ChatBodyContainer>
  );
}
