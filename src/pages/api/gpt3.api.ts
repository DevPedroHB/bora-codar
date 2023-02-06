import { OpenAIStream, OpenAIStreamEvent } from "@/lib/open-ai-stream";
import type { NextRequest } from "next/server";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined");
}

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { prompt } = (await req.json()) as { prompt: string };

  const payload: OpenAIStreamEvent = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 100,
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
