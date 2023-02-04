import { styled } from "@/styles";

export const ChatFooterContainer = styled("form", {
  width: "100%",
  position: "relative",

  input: {
    border: 0,
    width: "100%",
    background: "#282843",
    color: "inherit",
    fontSize: "1rem",
    borderRadius: "999px",
    padding: ".875rem 3.625rem .875rem 1.5rem",

    "&:focus": {
      outline: "2px solid #E1E1E6",
    },
  },

  button: {
    border: 0,
    background: "transparent",
    color: "inherit",
    position: "absolute",
    top: "50%",
    right: "1.5rem",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});
