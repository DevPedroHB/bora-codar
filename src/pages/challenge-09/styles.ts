import { styled } from "@/styles";

export const Challenge09Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  padding: "1.5rem",
  backgroundColor: "#F8FAFC",
  color: "#0F172A",
  display: "grid",
  placeItems: "center",
  fontFamily: "Inter",
});

export const QuoteCard = styled("div", {
  maxWidth: "50rem",
  width: "100%",
  padding: "4rem 5rem",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px .25rem 2rem rgba(15, 23, 42, 0.15)",
  borderRadius: "1rem",
  display: "grid",
  gap: "4rem",

  h2: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: "120%",
  },

  "@bp2": {
    padding: "1.5rem",
  },
});
