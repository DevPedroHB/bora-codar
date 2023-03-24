import { styled } from "@/styles";

export const KanbanTasksComponent = styled("div", {
  padding: "0 1.5rem",
  display: "flex",
  flexWrap: "wrap",
  gap: "3rem",
});

export const TasksContent = styled("section", {
  flex: 1,
});

export const TasksTitle = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h2: {
    padding: "1.5rem 0",
    color: "#403937",
    fontSize: "1.25rem",
  },

  button: {
    padding: ".25rem",
    backgroundColor: "#7C3AED",
    border: 0,
    borderRadius: "999px",
    lineHeight: 0,
    transition: "filter .2s",

    svg: {
      color: "#FFFFFF",
    },

    "&:hover": {
      filter: "brightness(110%)",
    },
  },
});

export const TasksWrapper = styled("div", {
  display: "grid",
  gap: "1.5rem",
});
