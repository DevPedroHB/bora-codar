import { useCalculator } from "@/hooks/useCalculator";
import { Divide, Equals, Minus, Plus, PlusMinus, X } from "phosphor-react";
import { useCallback, useEffect } from "react";
import { CalculatorButton, CalculatorKeyboardContainer } from "./styles";

export function CalculatorKeyboard() {
  const {
    handleAddOperator,
    handleClear,
    handleClearAll,
    handleResultRound,
    handleCalculate,
  } = useCalculator();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const keysAuthorized = "0123456789+-*/%,.()";

      if (keysAuthorized.includes(event.key)) {
        handleAddOperator(event.key);
      } else if (event.key === "Backspace") {
        handleClear();
      } else if (event.key === "Enter" || event.key === "=") {
        handleCalculate();
      }
    },
    [handleAddOperator, handleClear, handleCalculate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <CalculatorKeyboardContainer>
      <CalculatorButton variant="clear" onClick={() => handleClear()}>
        CE
      </CalculatorButton>
      <CalculatorButton onClick={() => handleClearAll()}>C</CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("%")}>
        %
      </CalculatorButton>
      <CalculatorButton
        variant="operator"
        onClick={() => handleAddOperator("/")}
      >
        <Divide size={28} />
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("7")}>
        7
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("8")}>
        8
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("9")}>
        9
      </CalculatorButton>
      <CalculatorButton
        variant="operator"
        onClick={() => handleAddOperator("*")}
      >
        <X size={28} />
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("4")}>
        4
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("5")}>
        5
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("6")}>
        6
      </CalculatorButton>
      <CalculatorButton
        variant="operator"
        onClick={() => handleAddOperator("-")}
      >
        <Minus size={28} />
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("1")}>
        1
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("2")}>
        2
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("3")}>
        3
      </CalculatorButton>
      <CalculatorButton
        variant="operator"
        onClick={() => handleAddOperator("+")}
      >
        <Plus size={28} />
      </CalculatorButton>
      <CalculatorButton onClick={() => handleResultRound()}>
        <PlusMinus size={28} />
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator("0")}>
        0
      </CalculatorButton>
      <CalculatorButton onClick={() => handleAddOperator(",")}>
        ,
      </CalculatorButton>
      <CalculatorButton variant="result" onClick={() => handleCalculate()}>
        <Equals size={28} />
      </CalculatorButton>
    </CalculatorKeyboardContainer>
  );
}
