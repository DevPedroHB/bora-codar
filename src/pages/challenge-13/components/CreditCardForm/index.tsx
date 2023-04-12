import { useCreditCard } from "@/hooks/useCreditCard";
import { Question } from "phosphor-react";
import InputMask from "react-input-mask";
import {
  CreditCardFormComponent,
  CreditCardFormInputWrapper,
  CreditCardFormWrapper,
} from "./styles";

export function CreditCardForm() {
  const { setFlip, register, handleSubmit, handleRegisterCreditCard } =
    useCreditCard();

  return (
    <CreditCardFormComponent
      id="credit-card-form"
      onSubmit={handleSubmit(handleRegisterCreditCard)}
    >
      <CreditCardFormInputWrapper>
        <label htmlFor="card-number">Número do cartão</label>
        <InputMask
          id="card-number"
          mask="9999 9999 9999 9999"
          maskChar=""
          placeholder="Número do cartão"
          {...register("cardNumber")}
        />
      </CreditCardFormInputWrapper>
      <CreditCardFormInputWrapper>
        <label htmlFor="card-holder-name">Nome do titular</label>
        <input
          id="card-holder-name"
          type="text"
          placeholder="Nome como está no cartão"
          maxLength={20}
          {...register("cardHolderName")}
        />
      </CreditCardFormInputWrapper>
      <CreditCardFormWrapper>
        <CreditCardFormInputWrapper>
          <label htmlFor="validity">Validade</label>
          <InputMask
            id="validity"
            mask="99/99"
            maskChar=""
            placeholder="mm/aa"
            {...register("cardValidity")}
          />
        </CreditCardFormInputWrapper>
        <CreditCardFormInputWrapper>
          <label htmlFor="cvv">
            CVV
            <Question size={16} weight="fill" />
          </label>
          <InputMask
            id="cvv"
            mask="999"
            maskChar=""
            placeholder="***"
            onFocus={() => setFlip(true)}
            {...register("cardCVV")}
            onBlur={() => setFlip(false)}
          />
        </CreditCardFormInputWrapper>
      </CreditCardFormWrapper>
    </CreditCardFormComponent>
  );
}
