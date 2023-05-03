import { styled } from "@/styles";

export const ContactPageHeaderComponent = styled("header", {
  padding: "2.5rem",
  backgroundColor: "#16151E",
  display: "grid",
  gap: "1.5rem",
});

export const ContactPageHeaderNav = styled("nav", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h2: {
    fontSize: "1.25rem",
    lineHeight: "1.4375rem",
  },

  div: {
    display: "flex",
    gap: "1rem",

    svg: {
      fontSize: "1.5rem",
    },
  },
});

export const ContactPageHeaderInputWrapper = styled("form", {
  width: "100%",
  borderRadius: "5px",
  display: "flex",
  overflow: "hidden",

  input: {
    flex: 1,
    padding: "1rem 1.5rem 1rem 0",
    backgroundColor: "#24243D",
    color: "#E1E1E6",
    border: 0,
    fontSize: ".75rem",
    lineHeight: ".875rem",

    "&::placeholder": {
      color: "#E1E1E6",
    },
  },

  button: {
    padding: "1rem .625rem 1rem 1.5rem",
    backgroundColor: "#24243D",
    color: "#E1E1E6",
    border: 0,
    fontSize: "1rem",
    lineHeight: 0,
  },

  "&:has(:focus)": {},

  "&:has(:hover)": {},
});
