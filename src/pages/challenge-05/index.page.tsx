import CalculatorContextProvider from "@/contexts/CalculatorContext";
import { CalculatorDisplay } from "./components/CalculatorDisplay";
import { CalculatorKeyboard } from "./components/CalculatorKeyboard";
import { Challenge05Container } from "./styles";

export default function Challenge05() {
  return (
    <CalculatorContextProvider>
      <Challenge05Container>
        <div>
          <CalculatorDisplay />
          <CalculatorKeyboard />
        </div>
      </Challenge05Container>
    </CalculatorContextProvider>
  );
}
