import { styled } from "@/styles";

export const Challenge06Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "linear-gradient(167.96deg, #8257E5 0%, #271A45 100%)",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(22.5rem, 1fr))",
  placeItems: "center",
  fontFamily: "Rubik",
});

export const Challenge06Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.25rem",
  padding: "1rem",

  "> strong": {
    fontWeight: 500,
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    color: "#FFF",
    letterSpacing: "-0.02em",
  },

  "> p": {
    maxWidth: "16.875rem",
    fontWeight: 400,
    fontSize: ".875rem",
    lineHeight: "1.5rem",
    color: "#FFF",
    letterSpacing: "-0.02em",
    opacity: "0.64",
  },
});
