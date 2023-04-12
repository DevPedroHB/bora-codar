import { CreditCardContext } from "@/contexts/CreditCardContext";
import { useContext } from "react";

export function useCreditCard() {
  const context = useContext(CreditCardContext);

  return context;
}
