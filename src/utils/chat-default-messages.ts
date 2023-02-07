import { randomBytes } from "crypto";

export const chatDefaultMessages = [
  {
    id: randomBytes(20).toString("hex"),
    author: "ChatGPT",
    date: new Date(),
    message:
      "Faaaaala dev, vamos conversar? Me faça perguntas que trarei as melhores resposta. 🚀",
    done: true,
  },
];
