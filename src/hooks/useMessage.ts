import { MessageContext } from "@/contexts/MessageContext";
import { useContext } from "react";

export function useMessage() {
  const context = useContext(MessageContext);

  return context;
}
