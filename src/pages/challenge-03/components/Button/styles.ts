import { keyframes, styled } from "@/styles";

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const ButtonComponent = styled("button", {
  fontFamily: "Inter",
  fontSize: ".875rem",
  fontWeight: 500,
  lineHeight: "1.5rem",
  textTransform: "uppercase",
  border: 0,
  borderRadius: "1.5rem",
  padding: ".75rem 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",
  color: "$white",
  transition: "background .2s ease-in-out",

  "&:focus": {
    outline: "2px solid #d9cdf7",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        background: "#8257e5",

        "&:not(:disabled):hover": {
          background: "#9674e5",
        },
      },

      secondary: {
        background: "#3c3748",

        "&:not(:disabled):hover": {
          background: "#6a617f",
        },
      },

      tertiary: {
        background: "transparent",

        "&:not(:disabled):hover": {
          background: "transparent",
        },
      },
    },

    animated: {
      true: {
        svg: {
          animation: `${spin} 700ms infinite linear`,
        },
      },
    },

    loading: {
      true: {
        cursor: "progress",
      },
    },

    movable: {
      true: {
        cursor: "move",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    animated: "icon",
  },
});
