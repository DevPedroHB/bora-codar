import { styled } from "@/styles";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const Challenge07Container = styled("main", {
  ":focus": {
    outline: 0,
    boxShadow: "0 0 0 2px #6246EA",
    borderRadius: "5px",
  },
});

export const Content = styled("div", {
  maxWidth: "79rem",
  margin: "0 auto",
  padding: "6.25rem 1.5rem",
  display: "grid",
  gap: "2.5rem",
});

export const ContentTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h2: {
    color: "#121214",
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: "140%",
  },

  "@bp2": {
    flexDirection: "column",
  },
});

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: "flex",
  gap: "2px",
  border: "1px solid #EAEAEA",
  padding: ".5rem",
  borderRadius: "6px",
});

export const ToggleGroupItem = styled(ToggleGroup.Item, {
  width: "5.375rem",
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFF",
  color: "#6246EA",
  border: 0,
  borderRadius: "5px",
  fontSize: ".875rem",
  fontWeight: 700,
  textTransform: "uppercase",

  "&[data-state=on]": {
    backgroundColor: "#6246EA",
    color: "#FFF",
  },
});

export const CardGroup = styled("div", {
  display: "grid",
  gap: "2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
});
