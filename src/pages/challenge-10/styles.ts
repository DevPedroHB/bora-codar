import { styled } from "@/styles";

export const Challenge10Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  padding: "3.25rem",
  display: "grid",
  placeItems: "center",
  fontFamily: "Lato",
  background: "url(/images/clima-background.jpeg) no-repeat center/cover",
  color: "#FFF",
});

export const Challenge10Content = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
});

export const ContentColumn = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
});

export const ContentRow = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});
