import CreditCardContextProvider from "@/contexts/CreditCardContext";
import { NextSeo } from "next-seo";
import { ShieldCheck } from "phosphor-react";
import { CreditCard } from "./components/CreditCard";
import { CreditCardForm } from "./components/CreditCardForm";
import {
  Challenge13Button,
  Challenge13Container,
  Challenge13Content,
  Challenge13Wrapper,
  CreditCardWrapper,
} from "./styles";

export default function Challenge13() {
  return (
    <CreditCardContextProvider>
      <NextSeo
        title="Desafio 13 | Formulário de Cartão de Crédito"
        description="Este projeto é um formulário de cartão de crédito que permite aos usuários inserir as informações de seus cartões de crédito de forma segura."
      />
      <Challenge13Container>
        <Challenge13Content>
          <Challenge13Wrapper>
            <CreditCardForm />
            <CreditCardWrapper>
              <CreditCard />
              <span>
                <ShieldCheck size={20} weight="fill" color="#6EE7B7" />
                Seus dados estão seguros
              </span>
            </CreditCardWrapper>
          </Challenge13Wrapper>
          <Challenge13Button type="submit" form="credit-card-form">
            Adicionar cartão
          </Challenge13Button>
        </Challenge13Content>
      </Challenge13Container>
    </CreditCardContextProvider>
  );
}
