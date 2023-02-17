import { styled } from "@/styles";

export const BoardingPassCard = styled("div", {
  width: "20.5rem",
  background: "#FFF",
  padding: "1.5rem 2rem",
  "-webkit-mask": "var(--mask)",
  mask: "var(--mask)",

  variants: {
    modelOne: {
      true: {
        borderRadius: "1.5rem",
      },
    },

    modelTwo: {
      top: {
        borderRadius: "1.5rem 1.5rem 0 0",
        "--mask":
          "radial-gradient(.75rem at .75rem bottom, #0000 93%, black) -.75rem",
        "-webkit-mask-repeat": "repeat-x",
        "mask-repeat": "repeat-x",
      },

      middle: {
        borderRadius: "0",
        "--mask":
          "radial-gradient(.75rem at .75rem .75rem, #0000 93%, black) -.75rem -.75rem",
      },

      bottom: {
        borderRadius: "0 0 1.5rem 1.5rem",
        "--mask":
          "radial-gradient(.75rem at .75rem top, #0000 93%, black) -.75rem",
        "-webkit-mask-repeat": "repeat-x",
        "mask-repeat": "repeat-x",
      },
    },

    middle: {
      true: {
        border: "1px dashed rgba(0, 0, 0, 0.32)",
        borderLeft: 0,
        borderRight: 0,
      },
    },
  },

  defaultVariants: {
    modelOne: true,
  },
});
