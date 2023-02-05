import { styled } from "@/styles";

export const ChatBodyContainer = styled("div", {
  overflowY: "scroll",
  display: "grid",
  gap: "1.875rem",
  fontSize: ".75rem",
  lineHeight: 1.4,

  "div:first-child": {
    textAlign: "center",
  },

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const Message = styled("div", {
  width: "fit-content",
  height: "fit-content",
  display: "grid",
  gap: ".625rem",
  maxWidth: "75%",

  p: {
    padding: ".875rem",
  },

  variants: {
    other: {
      true: {
        p: {
          background: "#633bbc",
          borderRadius: "0 .5rem .5rem .5rem",
        },
      },
    },

    you: {
      true: {
        marginLeft: "auto",

        span: {
          textAlign: "right",
        },

        p: {
          background: "#07847e",
          borderRadius: ".5rem .5rem 0 .5rem",
        },
      },
    },
  },

  defaultVariants: {
    other: true,
  },
});
