import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
    },
  },
  media: {
    bp1: "(max-width: 468px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
});
