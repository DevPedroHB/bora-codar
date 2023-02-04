import { styled } from "@/styles";

export const Challenge03Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "#130F1E",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Content = styled("div", {
  maxWidth: "22.5rem",
  padding: "0 2.5rem",
});

export const Header = styled("div", {
  marginBottom: "4.25rem",

  h1: {
    fontFamily: "Inter",
    color: "$white",
    fontSize: "2rem",
  },

  p: {
    marginTop: ".5rem",
    color: "$white",
    fontFamily: "Roboto",
    opacity: 0.67,
  },
});

export const ButtonGroup = styled("div", {
  display: "grid",
  gap: "2rem",
});
