import CalculatorContextProvider from "@/contexts/CalculatorContext";
import { NextSeo } from "next-seo";
import { CalculatorDisplay } from "./components/CalculatorDisplay";
import { CalculatorKeyboard } from "./components/CalculatorKeyboard";
import { Challenge05Container } from "./styles";

export default function Challenge05() {
  return (
    <CalculatorContextProvider>
      <NextSeo
        title="Desafio 05 | Calculadora"
        description="A proposta desse desafio é fazer uma calculadora e torná-la funcional."
      />
      <Challenge05Container>
        <div>
          <CalculatorDisplay />
          <CalculatorKeyboard />
        </div>
      </Challenge05Container>
    </CalculatorContextProvider>
  );
}
