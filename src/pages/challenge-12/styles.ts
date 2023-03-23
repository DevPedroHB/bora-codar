import { styled } from "@/styles";

export const Challenge12Container = styled("main", {
  backgroundColor: "#7C3AED",
  display: "flex",
  fontFamily: "Inter",
});

export const KanbanContent = styled("div", {
  flex: 1,
  height: "calc(100vh - .25rem)",
  marginTop: ".25rem",
  padding: "3rem 2rem",
  backgroundColor: "#FBFAFF",
  borderRadius: "2rem 0 0 0",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  overflowY: "scroll",

  "@bp2": {
    marginLeft: "5.32rem",
    padding: "1.5rem 0",
  },
});
