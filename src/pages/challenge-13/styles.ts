import { keyframes, styled } from "@/styles";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const Challenge13Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#111827",
  color: "#E5E7EB",
  display: "grid",
  placeItems: "center",
  fontFamily: "Source Sans Pro, sans-serif",
});

export const Challenge13Content = styled("section", {
  margin: "1.5rem",
  padding: "2rem",
  backgroundColor: "#1F2937",
  border: "1px solid #374151",
  borderRadius: "8px",
  display: "grid",
  gap: "3rem",
});

export const Challenge13Button = styled("button", {
  padding: "1rem 3rem",
  backgroundColor: "#9333EA",
  color: "#F9FAFB",
  border: 0,
  borderRadius: "4px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  fontWeight: 600,
  fontSize: "1.125rem",
  transition: "all .2s",

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:not(:disabled):focus": {
    outline: "2px solid #F9FAFB",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "#A855F7",
  },

  variants: {
    loading: {
      true: {
        cursor: "progress",

        svg: {
          animation: `${spin} 700ms infinite linear`,
        },
      },
    },
  },
});

export const Challenge13Wrapper = styled("div", {
  display: "flex",
  gap: "4rem",

  "@bp2": {
    flexDirection: "column",
  },
});

export const CreditCardWrapper = styled("div", {
  display: "grid",
  placeItems: "center",
  gap: "2rem",

  span: {
    color: "#E5E7EB",
    fontSize: ".875rem",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
});
