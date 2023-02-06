import { ActionTypes } from "@/reducers/messages/actions";
import { messagesReducer } from "@/reducers/messages/reducer";
import { chatDefaultMessages } from "@/utils/chat-default-messages";
import { NextSeo } from "next-seo";
import { useReducer } from "react";
import { ChatBody } from "./components/ChatBody";
import { ChatFooter } from "./components/ChatFooter";
import { ChatHeader } from "./components/ChatHeader";
import { Challenge04Container, Content } from "./styles";

export default function Challenge04() {
  const [messages, dispatch] = useReducer(messagesReducer, chatDefaultMessages);

  function handleNewMessage(message: string) {
    dispatch({
      type: ActionTypes.NEW_MESSAGE,
      payload: {
        message,
      },
    });
  }

  function handleNewReplyMessage(replyMessage: string, done: boolean) {
    dispatch({
      type: ActionTypes.NEW_REPLY_MESSAGE,
      payload: {
        replyMessage,
        done,
      },
    });
  }

  return (
    <>
      <NextSeo
        title="Desafio 04 | Chat"
        description="A proposta desse desafio é fazer um layout responsivo de uma página de conversa de uma rede social."
      />
      <Challenge04Container>
        <Content>
          <ChatHeader />
          <ChatBody messages={messages} />
          <ChatFooter
            handleNewMessage={handleNewMessage}
            handleNewReplyMessage={handleNewReplyMessage}
          />
        </Content>
      </Challenge04Container>
    </>
  );
}
