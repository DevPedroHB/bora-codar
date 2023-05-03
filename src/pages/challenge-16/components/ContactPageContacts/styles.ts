import { styled } from "@/styles";

export const ContactPageContactsComponents = styled("section", {
  height: "calc(100vh - 11rem)",
  padding: "3rem 2.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.5rem",
  overflowY: "scroll",
});

export const ContactPageContactsCategory = styled("div", {
  display: "flex",
  gap: "3.25rem",

  "> span": {
    width: "2.5rem",
    height: "fit-content",
    aspectRatio: "1 / 1",
    backgroundColor: "var(--category-color)",
    borderRadius: "8px",
    display: "grid",
    placeItems: "center",
  },
});

export const ContactPageContactsWrapper = styled("div", {
  display: "grid",
  gap: "2rem",
});

export const ContactPageContactsContact = styled("div", {
  display: "flex",
  gap: "1rem",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: ".25rem",
  },

  h3: {
    fontSize: "1rem",
  },

  p: {
    color: "#8C8CBA",
    fontSize: ".75rem",
  },
});
