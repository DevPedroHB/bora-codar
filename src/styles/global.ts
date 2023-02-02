import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    "::-webkit-scrollbar": {
      width: ".375rem",
      height: ".375rem",
      backgroundColor: "#29292b",
    },

    "::-webkit-scrollbar-thumb": {
      background: "#00B37E",
      borderRadius: ".5rem",
    },

    "::-webkit-scrollbar-thumb:hover": {
      background: "#19ba8a",
    },
  },

  html: {
    "@media screen and (max-width: 1024px)": {
      fontSize: "97.5%",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "87.5%",
    },
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },
});
