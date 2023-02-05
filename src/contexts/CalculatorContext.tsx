import { createContext, ReactNode, useState } from "react";

interface ICalculatorContext {
  operation: string;
  result: string;
  handleAddOperator: (operator: string) => void;
  handleClear: () => void;
  handleClearAll: () => void;
  handleResultRound: () => void;
  handleCalculate: () => void;
  handleAddResultInOperation: () => void;
}

export const CalculatorContext = createContext({} as ICalculatorContext);

interface ICalculatorContextProvider {
  children: ReactNode;
}

export default function CalculatorContextProvider({
  children,
}: ICalculatorContextProvider) {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  function handleAddOperator(text: string) {
    setOperation((prev) => prev.concat(text));
  }

  function handleClear() {
    setOperation((prev) => prev.slice(0, -1));
  }

  function handleClearAll() {
    setOperation("");
    setResult("");
  }

  function handleResultRound() {
    setResult((prev) => Number(prev).toFixed(2));
  }

  function handleCalculate() {
    try {
      setResult(eval(operation.replace(",", ".")));
    } catch (error) {
      setResult("NaN");
    }
  }

  function handleAddResultInOperation() {
    setOperation(String(result));
  }

  return (
    <CalculatorContext.Provider
      value={{
        operation,
        result,
        handleAddOperator,
        handleClear,
        handleClearAll,
        handleResultRound,
        handleCalculate,
        handleAddResultInOperation,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
