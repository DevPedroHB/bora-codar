import { styled } from "@/styles";

export const CardGroup = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "2rem",
});

export const CardInfo = styled("div", {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14.6rem, auto))",
  gap: "2rem",
});

export const MoreSales = styled("div", {
  display: "grid",
  gap: ".5rem",
  fontWeight: 500,
  lineHeight: "160%",
  whiteSpace: "nowrap",

  small: {
    display: "flex",
    alignItems: "center",
    gap: ".25rem",
    fontSize: ".875rem",
  },

  span: {
    fontSize: "1.5rem",
  },
});

export const Graphic = styled("div", {
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "1.5rem",
  position: "relative",

  "&::before": {
    position: "absolute",
    content: "",
    display: "block",
    width: "100%",
    height: ".1875rem",
    background: "#4a4556",
    borderRadius: "999px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 0,
  },
});

export const GraphicBar = styled("div", {
  display: "grid",
  justifyItems: "center",
  gap: ".3125rem",
  zIndex: 1,

  div: {
    width: ".9375rem",
    height: "var(--height)",
    background: "linear-gradient(180deg, #90f7ec 0%, #32ccbc 100%)",
    borderRadius: "999px",
  },

  span: {
    fontWeight: 500,
    fontSize: ".875rem",
    lineHeight: "160%",
  },
});
