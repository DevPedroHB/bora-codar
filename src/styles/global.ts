import { globalCss } from "@/styles";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    outline: "none",

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
    scrollBehavior: "smooth",

    "@bp3": {
      fontSize: "97.5%",
    },
    "@bp2": {
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
