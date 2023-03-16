import { styled } from "@/styles";

export const TemperatureNowContainer = styled("section", {
  flex: 1,
  minWidth: "16.5rem",
  background:
    "url(/images/background-temperature-now.jpeg) no-repeat center/cover",
  borderRadius: ".625rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "3rem",
  padding: ".75rem",
  position: "relative",

  "&::before": {
    content: "",
    width: "11rem",
    height: "11rem",
    background: "url(/images/clima-clouds.svg) no-repeat center/cover",
    position: "absolute",
    top: "-3.5rem",
    left: "-3.5rem",
  },
});

export const Location = styled("div", {
  padding: "1.25rem 1.25rem 0 0",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: ".25rem",

  strong: {
    fontSize: ".875rem",
    color: "#C2BFF4",
  },
});

export const Temp = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: ".25rem",
  fontWeight: 700,

  "> span": {
    fontSize: "1.5rem",
    color: "#dad8f7",
    marginTop: ".9375rem",
  },
});

export const TempNumber = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".25rem",
  textAlign: "center",
  fontSize: "5.5rem",

  div: {
    fontSize: "1.25rem",

    span: {
      color: "#c2bff4",
    },
  },
});

export const Statistics = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",
});

export const Stats = styled("div", {
  flex: 1,
  padding: ".875rem 1rem",
  backgroundColor: "rgba(102, 96, 200, 0.6)",
  borderRadius: ".375rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: ".75rem",

  div: {
    color: "#e7e6fb",
    fontSize: ".75rem",

    h5: {
      fontSize: "1.125rem",
      display: "flex",
      alignItems: "baseline",
      gap: ".25rem",

      span: {
        fontSize: ".875rem",
      },
    },
  },
});
