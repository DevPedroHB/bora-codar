import { styled } from "@/styles";

export const PricingCardComponent = styled("div", {
  padding: "3rem 2rem 2rem",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "relative",

  "& > span": {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: ".5rem 1rem",
    backgroundColor: "#FBA94C",
    color: "#0F172A",
    borderRadius: "6px",
    fontWeight: 700,
    fontSize: ".75rem",
    textTransform: "uppercase",
  },

  hr: {
    borderTop: "1px solid #E2E8F0",
    borderBottom: 0,
  },

  variants: {
    variant: {
      DEFAULT: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
      },

      ADVANTAGEOUS: {
        backgroundColor: "#0F172A",
        border: 0,

        "h2, p": {
          color: "#F8FAFC",
        },

        hr: {
          borderColor: "#334155",
        },

        "li span": {
          color: "#CBD5E1",
        },
      },
    },
  },
});

export const PricingCardHeader = styled("div", {
  display: "grid",
  gap: ".5rem",

  strong: {
    color: "#7C3AED",
    fontWeight: 600,
    fontSize: ".875rem",
    textTransform: "uppercase",
  },

  div: {
    fontWeight: 700,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  h2: {
    fontSize: "2rem",
  },

  p: {
    fontSize: "1.5rem",
  },

  small: {
    fontSize: "1.125rem",

    "&:first-child": {
      fontWeight: 400,
    },
  },
});

export const PricingCardButton = styled("button", {
  width: "100%",
  padding: "1rem 1.5rem",
  border: "1px solid #1E293B",
  borderRadius: "4px",
  fontWeight: 700,
  fontSize: "1rem",
  transition: "filter .2s",

  "&:hover": {
    filter: "brightness(90%)",
  },

  variants: {
    variant: {
      DEFAULT: {
        backgroundColor: "#FFF",
      },

      ADVANTAGEOUS: {
        backgroundColor: "#996DFF",
        color: "#FFF",
        border: 0,
      },
    },
  },
});

export const PricingCardBenefits = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  li: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },

  span: {
    flex: 1,
    color: "#475569",
    fontSize: "1rem",
  },
});
