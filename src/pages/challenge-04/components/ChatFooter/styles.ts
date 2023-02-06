import { keyframes, styled } from "@/styles";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

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

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    "&:not(:disabled):focus": {
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

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  small: {
    position: "absolute",
    top: "-1.25rem",
  },

  variants: {
    loading: {
      true: {
        button: {
          svg: {
            animation: `${spin} 700ms infinite linear`,
          },
        },
      },
    },
  },
});
