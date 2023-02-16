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
        description="Este projeto consiste em uma calculadora simples. O objetivo do projeto é torná-la funcional, permitindo que o usuário realize operações matemáticas."
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
