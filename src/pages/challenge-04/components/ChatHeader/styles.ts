import { styled } from "@/styles";

export const ChatHeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "> div": {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    img: {
      width: "3rem",
      height: "3rem",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },

  svg: {
    cursor: "pointer",
  },
});

export const UserStatus = styled("div", {
  display: "grid",

  strong: {
    marginBottom: ".25rem",
  },

  span: {
    display: "flex",
    alignItems: "center",
    gap: ".25rem",
    color: "#00b37e",
    fontSize: ".75rem",

    "&::before": {
      content: "",
      width: ".5rem",
      height: ".5rem",
      display: "block",
      backgroundColor: "#00b37e",
      borderRadius: "50%",
    },
  },
});
