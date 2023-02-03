import { styled } from "@/styles";

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".6rem",
  color: "#E1E1E6",

  h2: {
    fontWeight: 700,
    fontSize: "1.5rem",
  },

  span: {
    fontSize: "1.188rem",
  },
});
