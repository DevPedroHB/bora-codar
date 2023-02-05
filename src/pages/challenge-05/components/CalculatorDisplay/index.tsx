import { useCalculator } from "@/hooks/useCalculator";
import { Equals } from "phosphor-react";
import { CalculatorDisplayContainer } from "./styles";

export function CalculatorDisplay() {
  const { operation, result, handleAddResultInOperation } = useCalculator();

  return (
    <CalculatorDisplayContainer>
      <span>{operation}</span>
      <div>
        <Equals size={20} color="#6B6B6B" />
        <span onClick={() => handleAddResultInOperation()} title={result}>
          {result}
        </span>
      </div>
    </CalculatorDisplayContainer>
  );
}
