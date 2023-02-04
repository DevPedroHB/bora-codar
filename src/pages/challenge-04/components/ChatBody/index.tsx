import { ChatBodyContainer, Message } from "./styles";

export function ChatBody() {
  return (
    <ChatBodyContainer>
      <div>Hoje 11:30</div>
      <Message>
        <span>Cecilia - 11:30</span>
        <p>Tive uma ideia incrível para um projeto! 😍</p>
      </Message>
      <Message you>
        <span>Você - 11:32</span>
        <p>Sério? Me conta mais.</p>
      </Message>
      <Message>
        <span>Cecilia - 11:34</span>
        <p>
          E se a gente fizesse um chat moderno e responsivo em apenas uma
          semana?
        </p>
      </Message>
      <Message you>
        <span>Você - 11:36</span>
        <p>#boraCodar! 🚀</p>
      </Message>
    </ChatBodyContainer>
  );
}
