import { styled } from "@/styles";

export const ControlsContainer = styled("div", {
  margin: "0 auto",
});

export const ControlsContent = styled("div", {
  width: "11.875rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  svg: {
    cursor: "pointer",
  },
});
