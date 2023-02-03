import { styled } from "@/styles";

export const ProductInfoContainer = styled("div", {
  color: "#271A45",

  span: {
    fontFamily: "Lato",
    fontWeight: 300,
    fontSize: ".625rem",
    lineHeight: 1,
  },

  h2: {
    fontFamily: "Crimson Pro",
    fontWeight: 600,
    fontSize: "2rem",
    lineHeight: 1,
    margin: ".75rem 0",
  },

  p: {
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1,
  },

  button: {
    all: "unset",
    marginTop: "1.25rem",
    border: "1px solid #271A45",
    padding: ".5rem 1rem",
    borderRadius: "9999px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
});
