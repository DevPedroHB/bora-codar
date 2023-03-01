import { styled } from "@/styles";

export const DefaultCardContainer = styled("div", {
  backgroundColor: "#363447",
  borderRadius: "1rem",
  padding: "1.8125rem 3rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  boxShadow: ".1875rem .25rem 1.625rem rgba(0, 0, 0, 0.25)",
  justifyContent: "space-between",

  h2: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "160%",
  },

  variants: {
    alignCenter: {
      true: {
        alignItems: "center",
      },
    },
  },
});
