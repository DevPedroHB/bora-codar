import { styled } from "@/styles";

export const CalculatorKeyboardContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: ".75rem",
});

export const CalculatorButton = styled("button", {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: 0,
  borderRadius: "999px",
  fontFamily: "Rubik",
  fontSize: "1.5rem",
  transition: "filter .1s ease-in-out",

  "&:not(:disabled):hover": {
    filter: "brightness(110%)",
  },

  "&:focus": {
    outline: "2px solid #975DFA",
  },

  variants: {
    variant: {
      default: {
        boxShadow:
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37",
        color: "#EBEBEB",
      },

      clear: {
        boxShadow:
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06)",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37",
        color: "#975DFA",
      },

      operator: {
        boxShadow:
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1)",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878",
        color: "#EBEBEB",
      },

      result: {
        boxShadow:
          "0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1)",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%), #7F45E2",
        color: "#EBEBEB",
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});
