import { styled } from "@/styles";

export const Challenge04Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "#1A1924",
  color: "#E1E1E6",
});

export const Content = styled("div", {
  height: "100vh",
  maxWidth: "59rem",
  margin: "0 auto",
  padding: "2rem",
  display: "grid",
  gridTemplateRows: "max-content 1fr max-content",
  gap: "1.875rem",
});
