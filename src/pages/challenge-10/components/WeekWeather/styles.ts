import { styled } from "@/styles";

export const WeekWeatherContainer = styled("section", {
  flex: 1,
  backgroundColor: "#6d67d0",
  backdropFilter: "blur(1rem)",
  borderRadius: ".625rem",
  padding: "2.5rem",
  display: "flex",
  flexWrap: "wrap",
  gap: ".75rem",
});

export const Day = styled("div", {
  flex: 1,
  display: "grid",
  justifyItems: "center",
  gap: "1rem",

  h4: {
    fontSize: ".875rem",
    color: "#dad8f7",
  },

  p: {
    fontWeight: 700,
    fontSize: "1rem",

    span: {
      color: "#c2bff4",
    },
  },
});
