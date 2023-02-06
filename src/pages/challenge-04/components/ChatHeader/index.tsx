import ChatGPTImg from "@/assets/images/chatgpt.png";
import Image from "next/image";
import { X } from "phosphor-react";
import { ChatHeaderContainer, UserStatus } from "./styles";

export function ChatHeader() {
  return (
    <ChatHeaderContainer>
      <div>
        <Image src={ChatGPTImg} width={48} height={48} alt="Imagem do perfil" />
        <UserStatus>
          <strong>ChatGPT</strong>
          <span>Online</span>
        </UserStatus>
      </div>
      <X size={20} weight="bold" />
    </ChatHeaderContainer>
  );
}
