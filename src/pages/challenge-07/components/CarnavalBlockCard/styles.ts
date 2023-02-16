import { styled } from "@/styles";

export const CarnavalBlockCardContainer = styled("div", {
  border: "1px solid #EAEAEA",
  borderRadius: "10px",
  overflow: "hidden",

  img: {
    width: "100%",
    height: "auto",
  },
});

export const CarnavalBlockCardBody = styled("div", {
  display: "grid",
  gap: "1rem",
  padding: "1rem",

  strong: {
    color: "#121214",
    fontSize: "1.25rem",
    lineHeight: "140%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
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
