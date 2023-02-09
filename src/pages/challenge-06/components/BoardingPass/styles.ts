import { styled } from "@/styles";

export const BoardingPassContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  hr: {
    backgroundColor: "#FFF",
    border: 0,
    borderTop: "1px dashed rgba(0, 0, 0, 0.32)",
  },
});

export const Row = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "> p": {
    width: "100%",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.188rem",
    letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.8)",

    strong: {
      fontWeight: 500,
    },
  },
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "div + div": {
    marginTop: "1rem",
  },

  span: {
    fontWeight: 400,
    fontSize: ".875rem",
    lineHeight: "1rem",
    letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.64)",
  },

  p: {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: "1.188rem",
    letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.88)",

    small: {
      fontWeight: 500,
      fontSize: ".625rem",
      lineHeight: ".75rem",
      letterSpacing: "-0.02em",
      color: "rgba(0, 0, 0, 0.88)",
      verticalAlign: "top",
    },
  },

  h2: {
    fontWeight: 500,
    fontSize: "2.5rem",
    lineHeight: "2.938rem",
    letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.88)",
  },

  strong: {
    width: "max-content",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: "1.188rem",
    letterSpacing: "-0.02em",
    color: "#FFF",
    background: "#633BBC",
    padding: ".5rem",
    borderRadius: ".5rem",
  },

  svg: {
    opacity: "80%",
  },

  div: {
    display: "grid",
  },

  variants: {
    left: {
      true: {
        textAlign: "start",
      },
    },

    right: {
      true: {
        textAlign: "end",
      },
    },

    textDefault: {
      true: {
        p: {
          fontWeight: 400,
        },
      },
    },
  },

  defaultVariants: {
    left: true,
  },
});
