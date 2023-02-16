import MessageContextProvider from "@/contexts/MessageContext";
import { chatDefaultMessages } from "@/utils/chat-default-messages";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { parseCookies } from "nookies";
import { ChatBody } from "./components/ChatBody";
import { ChatFooter } from "./components/ChatFooter";
import { ChatHeader } from "./components/ChatHeader";
import { Challenge04Container, Content } from "./styles";

interface IChallenge04 {
  cookiesStateAsJSON: string;
}

export default function Challenge04({ cookiesStateAsJSON }: IChallenge04) {
  return (
    <MessageContextProvider cookiesStateAsJSON={cookiesStateAsJSON}>
      <NextSeo
        title="Desafio 04 | Chat"
        description="Este projeto consiste em um layout responsivo de uma página de conversa de uma rede social. O objetivo do projeto é permitir que os usuários tenham uma experiência agradável e funcional na interação em uma rede social, especialmente no que diz respeito a conversas."
      />
      <Challenge04Container>
        <Content>
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </Content>
      </Challenge04Container>
    </MessageContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  let cookiesStateAsJSON = await cookies[
    "@bora-codar:messages-state-challenge-04"
  ];

  if (!cookiesStateAsJSON) {
    cookiesStateAsJSON = JSON.stringify(chatDefaultMessages);
  }

  return {
    props: { cookiesStateAsJSON },
  };
};
