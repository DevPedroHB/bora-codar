import { styled } from "@/styles";

export const ProductImgContainer = styled("div", {
  position: "relative",

  svg: {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
  },

  img: {
    width: "449px",
    height: "222px",
    objectFit: "cover",
  },
});
