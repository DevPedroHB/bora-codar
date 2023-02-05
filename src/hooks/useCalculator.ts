import { CalculatorContext } from "@/contexts/CalculatorContext";
import { useContext } from "react";

export function useCalculator() {
  const context = useContext(CalculatorContext);

  return context;
}
