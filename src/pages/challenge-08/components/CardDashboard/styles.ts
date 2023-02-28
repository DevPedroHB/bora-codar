import { styled } from "@/styles";

export const CardDashboardContainer = styled("div", {
  backgroundColor: "#363447",
  borderRadius: "1rem",
  padding: "1.8125rem 3rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  boxShadow: ".1875rem .25rem 1.625rem rgba(0, 0, 0, 0.25)",

  variants: {
    alignCenter: {
      true: {
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  },
});
