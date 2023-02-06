/* eslint-disable indent */
import { chatDefaultMessages } from "@/utils/chat-default-messages";
import { randomBytes } from "crypto";
import dayjs from "dayjs";
import produce from "immer";
import {
  ActionTypes,
  INewMessageAction,
  INewReplyMessageAction,
} from "./actions";

type TMessagesAction = INewMessageAction | INewReplyMessageAction;

export function messagesReducer(
  state: typeof chatDefaultMessages,
  action: TMessagesAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.NEW_MESSAGE: {
        draft.push({
          id: randomBytes(20).toString("hex"),
          author: "Você",
          date: dayjs(),
          message: action.payload.message,
          done: true,
        });

        break;
      }
      case ActionTypes.NEW_REPLY_MESSAGE: {
        const lastMessageDone = draft[state.length - 1];

        if (lastMessageDone.done) {
          draft.push({
            id: randomBytes(20).toString("hex"),
            author: "ChatGPT",
            date: dayjs(),
            message: action.payload.replyMessage,
            done: false,
          });
        } else {
          lastMessageDone.message =
            lastMessageDone.message + action.payload.replyMessage;
          lastMessageDone.done = action.payload.done;
        }

        break;
      }
      default:
        return state;
    }
  });
}
