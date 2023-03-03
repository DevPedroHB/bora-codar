import { styled } from "@/styles";

export const Challenge08Container = styled("main", {
  fontFamily: "Inter",
  color: "#FFF",
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#292738",
  display: "grid",
  placeItems: "center",
});

export const Challenge08Content = styled("div", {
  maxWidth: "73rem",
  width: "100%",
  padding: "1.5rem",
  display: "grid",
  gap: "3.6875rem",
});

export const CardGroup = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(18.5rem, auto))",
  gap: "2rem",
});
