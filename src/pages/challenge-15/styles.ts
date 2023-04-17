import { styled } from "@/styles";

export const Challenge15Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  padding: "1.5rem",
  backgroundColor: "#F8FAFC",
  color: "#1E293B",
  fontSize: "Titillium Web",
});

export const Challenge15Content = styled("section", {
  maxWidth: "75rem",
  minHeight: "calc(100vh - 3rem)",
  margin: "0 auto",
  display: "grid",
  placeContent: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))",
  gap: "2rem",

  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
