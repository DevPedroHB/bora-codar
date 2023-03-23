import { styled } from "@/styles";

export const KanbanProfileComponent = styled("div", {
  padding: "0 1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "3rem",

  h1: {
    color: "#403937",
    display: "flex",
    alignItems: "center",
    gap: ".75rem",

    img: {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
});
