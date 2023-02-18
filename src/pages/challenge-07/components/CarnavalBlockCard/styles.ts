import { styled } from "@/styles";

export const CarnavalBlockCardContainer = styled("div", {
  // maxWidth: "27rem",
  border: "1px solid #EAEAEA",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "box-shadow .2s",

  img: {
    width: "100%",
    height: "auto",
  },

  "&:hover": {
    boxShadow: "0 4px 8px rgb(0, 0, 0, .15)",
  },
});

export const CarnavalBlockCardBody = styled("div", {
  display: "grid",
  gap: "1rem",
  padding: "1rem",

  a: {
    width: "fit-content",
    color: "#121214",
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "140%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  p: {
    fontSize: "1rem",
    lineHeight: "160%",
    color: "rgba(0, 0, 0, 0.75)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 3,
  },

  div: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
});
