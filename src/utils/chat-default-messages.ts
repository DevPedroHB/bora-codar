import { randomBytes } from "crypto";
import dayjs from "dayjs";

export const chatDefaultMessages = [
  {
    id: randomBytes(20).toString("hex"),
    author: "ChatGPT",
    date: dayjs(),
    message:
      "Faaaaala dev, vamos conversar? Me faça perguntas que trarei as melhores resposta. 🚀",
    done: true,
  },
];
