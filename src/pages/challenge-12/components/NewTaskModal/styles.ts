import { styled } from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  zIndex: 1,
});

export const DialogTitle = styled(Dialog.Title, {
  color: "#403937",
  display: "flex",
  alignItems: "center",
  gap: ".75rem",

  img: {
    width: "1.125rem",
    height: "1.125rem",
  },
});

export const DialogClose = styled(Dialog.Close, {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  backgroundColor: "transparent",
  color: "#403937",
  border: 0,
  lineHeight: 0,
  transition: "color .2s",

  "&:hover": {
    color: "#7C3AED",
  },
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "32rem",
  width: "100%",
  padding: "2.5rem 3rem",
  backgroundColor: "#FBFAFF",
  borderRadius: "8px",
  zIndex: 2,
});

export const NewTaskForm = styled("form", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  input: {
    width: "100%",
    padding: "1rem 1.5rem",
    backgroundColor: "#FFFFFF",
    color: "#505059",
    border: "0.7px solid #E3E3E3",
    borderRadius: ".5rem",
    boxShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    fontWeight: 400,
    fontSize: "1rem",

    "&::placeholder": {
      color: "#7C7C8A",
    },
  },

  textarea: {
    width: "100%",
    padding: "1rem 1.5rem",
    backgroundColor: "#FFFFFF",
    color: "#505059",
    border: "0.7px solid #E3E3E3",
    borderRadius: ".5rem",
    boxShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    fontWeight: 400,
    fontSize: "1rem",
    resize: "vertical",

    "&::placeholder": {
      color: "#7C7C8A",
    },
  },

  button: {
    padding: "1rem 2rem",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: 0,
    borderRadius: ".3125rem",
    fontWeight: 400,
    fontSize: ".875rem",
    textShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: ".5rem",
    transition: "filter .2s",

    "&:hover": {
      filter: "brightness(110%)",
    },
  },
});

export const NewTaskInputWrapper = styled("div", {
  display: "flex",
  gap: "1rem",
  // backgroundColor: "red",

  button: {
    padding: "1rem",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: 0,
    borderRadius: ".3125rem",
    textShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
    lineHeight: 0,
    transition: "filter .2s",

    "&:hover": {
      filter: "brightness(110%)",
    },
  },
});

export const NewTaskCategories = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",

  small: {
    color: "#7C7C8A",
  },

  span: {
    padding: ".25rem .5rem",
    backgroundColor: "#E2D6FF",
    color: "#7C3AED",
    borderRadius: ".5rem",
    fontSize: ".6875rem",
    display: "flex",
    alignItems: "center",
    gap: ".25rem",
    cursor: "pointer",

    svg: {
      display: "none",
    },

    "&:hover": {
      svg: {
        display: "block",
      },
    },
  },
});
