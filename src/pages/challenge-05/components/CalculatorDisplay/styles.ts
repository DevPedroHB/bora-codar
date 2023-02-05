import { styled } from "@/styles";

export const CalculatorDisplayContainer = styled("div", {
  width: "100%",
  maxWidth: "18rem",
  padding: "0 1.375rem",
  fontFamily: "Rubik",
  textAlign: "right",
  marginBottom: "1.625rem",

  "> span": {
    color: "#6B6B6B",
    fontSize: "1.25rem",
    wordWrap: "break-word",
  },

  "> div": {
    marginTop: ".5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    span: {
      color: "#EBEBEB",
      fontSize: "2.25rem",
      lineHeight: 1.4,
      letterSpacing: "-0.02em",
      cursor: "pointer",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": 1,
    },
  },
});
