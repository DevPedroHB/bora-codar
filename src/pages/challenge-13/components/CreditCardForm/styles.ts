import { styled } from "@/styles";

export const CreditCardFormComponent = styled("form", {
  display: "grid",
  gap: "1.5rem",
});

export const CreditCardFormInputWrapper = styled("div", {
  display: "grid",
  gap: ".25rem",

  label: {
    width: "fit-content",
    color: "#E5E7EB",
    fontWeight: 600,
    fontSize: ".875rem",
    display: "flex",
    alignItems: "center",
    gap: ".25rem",
  },

  input: {
    padding: ".75rem",
    backgroundColor: "#111827",
    color: "#F3F4F6",
    border: "1px solid #374151",
    borderRadius: ".25rem",
    transition: "border .2s",

    "&:hover": {
      border: "1.5px solid #4B5563",
    },

    "&:focus": {
      border: "1.5px solid #9333EA",
    },
  },

  variants: {
    error: {
      true: {
        input: {
          border: "1.5px solid #FB7185",
        },
      },
    },
  },
});

export const CreditCardFormWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
