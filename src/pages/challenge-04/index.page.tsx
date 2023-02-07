import MessageContextProvider from "@/contexts/MessageContext";
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
        description="A proposta desse desafio é fazer um layout responsivo de uma página de conversa de uma rede social."
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
  const cookiesStateAsJSON = cookies["@bora-codar:messages-state-challenge-04"];

  return {
    props: { cookiesStateAsJSON },
  };
};
