import { styled } from "@/styles";

export const KanbanTasksComponent = styled("div", {
  padding: "0 1.5rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "3rem",
});

export const TaskContent = styled("section", {
  flex: 1,

  h2: {
    padding: "1.5rem 0",
    color: "#403937",
    fontSize: "1.25rem",
  },
});

export const TaskWrapper = styled("div", {
  display: "grid",
  gap: "1.5rem",
});
