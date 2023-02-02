import { styled } from "@/styles";

export const HomeContainer = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "#121214",
  color: "#C4C4CC",
});

export const HomeContent = styled("div", {
  maxWidth: "72rem",
  margin: "0 auto",
  padding: "2rem 1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gap: "1rem",
});

export const Card = styled("div", {
  background: "#201f24",
  padding: "1rem",
  border: "2px solid #201f24",
  borderRadius: ".5rem",
  transition: "all .2s ease-in-out",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",

  "&:hover": {
    border: "2px solid #00B37E",
  },
});

export const CardHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  h2: {
    color: "#E1E1E6",
    fontSize: "1.5rem",
    lineHeight: 1.25,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
  },

  span: {
    lineHeight: 1.6,
  },

  img: {
    width: "30%",
    height: "auto",
    borderRadius: ".5rem",
  },
});

export const CardBody = styled("main", {
  height: "100%",

  p: {
    lineHeight: 1.6,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 4,
  },
});

export const CardFooter = styled("footer", {
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(9.5rem, 1fr))",

  a: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    background: "#29292E",
    padding: "1rem 1rem",
    borderRadius: ".5rem",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: ".875rem",
    color: "#E1E1E6",
    cursor: "pointer",
    transition: "all .2s ease-in-out",

    "&:not(:disabled):hover": {
      background: "#323238",
    },

    "&:focus": {
      outline: "transparent",
      boxShadow: "0 0 0 2px #00B37E",
    },
  },
});
