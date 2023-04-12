import { zodResolver } from "@hookform/resolvers/zod";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { z } from "zod";

const CreditCardFormSchema = z.object({
  cardNumber: z.coerce.number(),
  cardHolderName: z.string(),
  cardValidity: z.coerce.number(),
  cardCVV: z.coerce.number(),
});

export type CreditCardFormData = z.infer<typeof CreditCardFormSchema>;

interface ICreditCardContext extends CreditCardFormData {
  flip: boolean;
  setFlip: Dispatch<SetStateAction<boolean>>;
  register: UseFormRegister<CreditCardFormData>;
  handleSubmit: UseFormHandleSubmit<CreditCardFormData>;
  handleRegisterCreditCard: (data: CreditCardFormData) => void;
}

export const CreditCardContext = createContext({} as ICreditCardContext);

interface ICreditCardContextProvider {
  children: ReactNode;
}

export default function CreditCardContextProvider({
  children,
}: ICreditCardContextProvider) {
  const [flip, setFlip] = useState(false);
  const { register, watch, handleSubmit, reset } = useForm<CreditCardFormData>({
    resolver: zodResolver(CreditCardFormSchema),
  });
  const cardNumber = watch("cardNumber");
  const cardHolderName = watch("cardHolderName");
  const cardValidity = watch("cardValidity");
  const cardCVV = watch("cardCVV");

  function handleRegisterCreditCard(data: CreditCardFormData) {
    console.log(data);

    reset();
  }

  return (
    <CreditCardContext.Provider
      value={{
        flip,
        setFlip,
        register,
        handleSubmit,
        handleRegisterCreditCard,
        cardNumber,
        cardHolderName,
        cardValidity,
        cardCVV,
      }}
    >
      {children}
    </CreditCardContext.Provider>
  );
}
