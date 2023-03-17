import { styled } from "@/styles";

export const ExchangeRateChartContainer = styled("div", {
  display: "grid",
  gap: "1.5rem",

  ".tooltip": {
    backgroundColor: "#FFFFFF",
    boxShadow: "0 .25rem 1rem rgb(15 23 42 / .15)",
    borderRadius: ".25rem",
    padding: ".5rem",
  },
});

export const ChartControls = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "-2.2rem .8rem 0 4rem",

  button: {
    width: "3rem",
    height: "1.5rem",
    backgroundColor: "transparent",
    border: 0,
    borderRadius: "999px",
    fontSize: ".875rem",
    transition: "all .2s",

    "&:hover, &.active": {
      backgroundColor: "#7C3AED",
      color: "#FFFFFF",
    },
  },
});
