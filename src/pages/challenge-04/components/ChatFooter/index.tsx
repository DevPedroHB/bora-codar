import { PaperPlaneRight } from "phosphor-react";
import { ChatFooterContainer } from "./styles";

export function ChatFooter() {
  return (
    <ChatFooterContainer>
      <input type="text" placeholder="Digite sua mensagem" autoFocus />
      <button>
        <PaperPlaneRight size={24} weight="fill" />
      </button>
    </ChatFooterContainer>
  );
}
