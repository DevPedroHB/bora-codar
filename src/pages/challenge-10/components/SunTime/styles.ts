import { styled } from "@/styles";

export const SunTimeContainer = styled("section", {
  flex: 1,
  padding: "1rem",
  backgroundColor: "#6d67d0",
  backdropFilter: "blur(1rem)",
  borderRadius: ".625rem",

  h2: {
    fontSize: "1rem",
    color: "#dad8f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    marginTop: "1rem",
  },
});

export const SunChartWrapper = styled("div", {
  marginTop: "2.5rem",
  height: "6.875rem",
});

export const SunChart = styled("div", {
  margin: "auto",
  width: "13.5rem",
  height: "13.5rem",
  position: "relative",

  "&::before": {
    content: "",
    width: ".75rem",
    height: ".75rem",
    position: "absolute",
    backgroundColor: "#f6c833",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    margin: "-0.375rem",
    transform:
      "rotate(calc(1deg * (((100 - var(--pos-x)) / -100) * 180))) translate(6.625rem)",
  },

  time: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%)",
    fontSize: ".875rem",
    fontWeight: 700,
  },
});

export const Chart = styled("div", {
  width: "13.5rem",
  height: "6.75rem",
  overflow: "hidden",

  "&::before": {
    content: "",
    width: "13.125rem",
    height: "13.125rem",
    display: "block",
    borderRadius: "50%",
    background:
      "linear-gradient(180deg, rgba(251, 219, 96, 0.2) 0%, rgba(251, 219, 96, 0) 101.89%)",
    "--mask": "linear-gradient(0deg, white 50%, transparent 0%)",
    mask: "var(--mask)",
    "-webkit-mask": "var(--mask)",
    rotate: "calc(1.825deg * var(--pos-x))",
  },

  img: {
    width: "13.5rem",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export const Time = styled("div", {
  width: "15.25rem",
  fontSize: ".75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: ".625rem auto 0",
});
