import { useMessage } from "@/hooks/useMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch, PaperPlaneRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChatFooterContainer } from "./styles";

const MessageFormSchema = z.object({
  message: z
    .string()
    .min(3, { message: "A mensagem deve ter no mínimo 3 caracteres." }),
});

type MessageFormData = z.infer<typeof MessageFormSchema>;

export function ChatFooter() {
  const { handleNewMessage, handleNewReplyMessage } = useMessage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MessageFormData>({
    resolver: zodResolver(MessageFormSchema),
  });

  async function handleSendMessage(data: MessageFormData) {
    handleNewMessage(data.message);

    try {
      const response = await fetch("/api/gpt3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: data.message }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();

        done = readerDone;

        const chunkValue = decoder.decode(value);

        handleNewReplyMessage(chunkValue, done);
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  }

  return (
    <ChatFooterContainer
      onSubmit={handleSubmit(handleSendMessage)}
      loading={isSubmitting}
    >
      {errors.message && <small>{errors.message.message}</small>}
      <input
        type="text"
        placeholder="Digite sua mensagem"
        autoFocus
        required
        {...register("message")}
        disabled={isSubmitting}
      />
      {isSubmitting ? (
        <button disabled={isSubmitting}>
          <CircleNotch size={24} weight="bold" />
        </button>
      ) : (
        <button disabled={isSubmitting}>
          <PaperPlaneRight size={24} weight="fill" />
        </button>
      )}
    </ChatFooterContainer>
  );
}
