import { styled } from "@/styles";

export const FormContainer = styled("div", {
  width: "100%",
  maxWidth: "24rem",

  img: {
    width: "9.9375rem",
    height: "auto",
    marginBottom: "7.125rem",
  },
});

export const LoginTitle = styled("div", {
  display: "grid",
  gap: "1rem",
  marginBottom: "2.5rem",

  h2: {
    fontWeight: 700,
    fontSize: "2.25rem",
    color: "#1E293B",
  },

  p: {
    maxWidth: "21.9375rem",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#475569",
  },
});

export const LoginForm = styled("form", {
  display: "grid",
  gap: "1rem",
});

export const FormGroup = styled("div", {
  display: "grid",
  gap: ".5rem",
  position: "relative",

  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 600,
    fontSize: ".875rem",
    color: "#1E293B",

    a: {
      color: "#7C3AED",
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  input: {
    padding: "1rem .75rem",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E2E8F0",
    borderRadius: ".25rem",
    fontWeight: 400,
    fontSize: ".875rem",
    color: "#1E293B",
    transition: "border-color .2s",

    "&::placeholder": {
      color: "#94A3B8",
    },

    "&:hover, &:focus": {
      borderColor: "#7C3AED",
    },
  },

  svg: {
    position: "absolute",
    bottom: "1rem",
    right: ".75rem",
    cursor: "pointer",
  },

  small: {
    position: "absolute",
    bottom: "-1.25rem",
    fontWeight: 400,
    fontSize: ".875rem",
    color: "#ED3A5A",
  },

  variants: {
    password: {
      true: {
        input: {
          padding: "1rem 2.5rem 1rem .75rem",
        },
      },
    },

    error: {
      true: {
        input: {
          borderColor: "#ED3A5A",
        },
      },
    },
  },
});

export const FormButton = styled("button", {
  margin: "2rem 0",
  padding: "1rem 2rem",
  backgroundColor: "#7C3AED",
  color: "#FFFFFF",
  border: 0,
  borderRadius: ".25rem",
  fontWeight: 700,
  fontSize: "1rem",
  transition: "background-color .2s",

  "&:disabled": {
    backgroundColor: "#9F67FF",
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "#9F67FF",
  },
});

export const DontHaveAccount = styled("div", {
  fontWeight: 400,
  fontSize: "1rem",
  color: "#475569",

  a: {
    fontWeight: 700,
    color: "#7C3AED",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
