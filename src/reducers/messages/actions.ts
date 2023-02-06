export enum ActionTypes {
  NEW_MESSAGE = "NEW_MESSAGE",
  NEW_REPLY_MESSAGE = "NEW_REPLY_MESSAGE",
}

export interface INewMessageAction {
  type: ActionTypes.NEW_MESSAGE;
  payload: {
    message: string;
  };
}

export interface INewReplyMessageAction {
  type: ActionTypes.NEW_REPLY_MESSAGE;
  payload: {
    replyMessage: string;
    done: boolean;
  };
}
