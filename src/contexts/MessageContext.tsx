import { ActionTypes } from "@/reducers/messages/actions";
import { messagesReducer } from "@/reducers/messages/reducer";
import { chatDefaultMessages } from "@/utils/chat-default-messages";
import { setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useReducer } from "react";

interface IMessageContext {
  messages: typeof chatDefaultMessages;
  handleNewMessage: (message: string) => void;
  handleNewReplyMessage: (message: string, done: boolean) => void;
}

export const MessageContext = createContext({} as IMessageContext);

interface IMessageContextProvider {
  children: ReactNode;
  cookiesStateAsJSON: string;
}

export default function MessageContextProvider({
  children,
  cookiesStateAsJSON,
}: IMessageContextProvider) {
  const [messages, dispatch] = useReducer(
    messagesReducer,
    chatDefaultMessages,
    () => {
      if (cookiesStateAsJSON) {
        return JSON.parse(cookiesStateAsJSON);
      } else {
        return chatDefaultMessages;
      }
    }
  );

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

  useEffect(() => {
    if (messages[messages.length - 1].done === true) {
      setCookie(
        null,
        "@bora-codar:messages-state-challenge-04",
        JSON.stringify(messages),
        {
          maxAge: 30 * 24 * 60 * 60, // 30 days
          path: "/",
        }
      );
    }
  }, [messages]);

  return (
    <MessageContext.Provider
      value={{ messages, handleNewMessage, handleNewReplyMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}
