import { styled } from "@/styles";

export const KanbanSearchComponent = styled("form", {
  padding: "0 1.5rem",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",

  button: {
    padding: ".75rem 2rem",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: 0,
    borderRadius: ".3125rem",
    fontWeight: 400,
    fontSize: ".875rem",
    textShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    transition: "filter .2s",

    "&:hover": {
      filter: "brightness(110%)",
    },
  },
});

export const SearchInputWrapper = styled("div", {
  flex: 1,
  position: "relative",

  svg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "1.5rem",
  },

  input: {
    width: "100%",
    minWidth: "12.5rem",
    padding: "1rem 1.5rem 1rem 3.4375rem",
    backgroundColor: "#FFFFFF",
    color: "#505059",
    border: "0.7px solid #E3E3E3",
    borderRadius: ".5rem",
    boxShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    fontWeight: 400,
    fontSize: "1rem",

    "&::placeholder": {
      color: "#7C7C8A",
    },
  },
});
