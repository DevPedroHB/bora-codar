import { styled } from "@/styles";

export const KanbanTaskComponent = styled("div", {
  minWidth: "12.5rem",
  padding: "1.375rem",
  backgroundColor: "#FFFFFF",
  border: ".125rem solid transparent",
  borderRadius: ".5rem",
  boxShadow: "0px .25rem 1rem #EAE2FD",
  display: "grid",
  gap: ".625rem",
  fontSize: ".875rem",
  fontWeight: 500,
  cursor: "grab",

  h3: {
    color: "#403937",
  },

  p: {
    color: "#756966",
  },

  variants: {
    isDragging: {
      true: {
        cursor: "grabbing",
        backgroundColor: "transparent",
        border: ".125rem dashed rgba(0, 0, 0, 0.2)",
        boxShadow: "none",

        "h3, p, div, span": {
          opacity: 0,
        },
      },
    },
  },
});

export const TaskCategories = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",

  span: {
    padding: ".25rem .5rem",
    backgroundColor: "#E2D6FF",
    color: "#7C3AED",
    borderRadius: ".5rem",
    fontSize: ".6875rem",
  },
});
