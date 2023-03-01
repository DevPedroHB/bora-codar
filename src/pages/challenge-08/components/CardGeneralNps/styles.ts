import { styled } from "@/styles";

export const NpsCardBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",

  p: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "160%",
    color: "#81FBB8",
  },
});

export const NpsCardFooter = styled("div", {
  display: "flex",
  gap: ".625rem",

  span: {
    fontSize: ".875rem",
    lineHeight: "160%",
    whiteSpace: "nowrap",
    fontWeight: 500,

    "& + span": {
      fontWeight: 400,
    },
  },
});
