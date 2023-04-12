import { styled } from "@/styles";

export const CreditCardComponent = styled("section", {
  width: "17.5rem",
  height: "10.5rem",
  padding: "1rem 1.5rem 1.5rem",
  background:
    "linear-gradient(-80deg, rgb(14, 15, 87) 0%, rgb(146, 14, 56) 50%, rgb(101, 56, 16) 100%)",
  color: "#F9FAFB",
  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "1rem",
  perspective: "37.5rem",
  transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

  variants: {
    flip: {
      true: {
        transform: "rotateY(-180deg)",
        transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
});

const StyleFrontAndBack = styled("div", {
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
});

export const CreditCardFront = styled(StyleFrontAndBack, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",

  h3: {
    fontWeight: 400,
    fontSize: ".875rem",
  },
});

export const CreditCardFrontWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "img:nth-child(1)": {
    width: "2rem",
    height: "2rem",
  },

  "img:nth-child(2)": {
    width: "1.5rem",
    height: "1.5rem",
  },
});

export const CreditCardFrontNumber = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "1.125rem",

  h2: {
    fontWeight: 600,
    fontSize: "1rem",
    letterSpacing: ".25rem",
  },
});

export const CreditCardBack = styled(StyleFrontAndBack, {
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "transparent",
  color: "white",
  transform: "rotateY(180deg)",
  display: "flex",
  flexDirection: "column",
});

export const CreditCardBackBlackBelt = styled("div", {
  width: "100%",
  height: "20%",
  marginTop: "1rem",
  backgroundColor: "#111827",
});

export const CreditCardBackCVVArea = styled("div", {
  margin: "auto 1.5rem 1.5rem",
  display: "flex",
  alignItems: "center",
  gap: ".5rem",

  p: {
    flex: 1,
    padding: ".75rem",
    backgroundColor: "#D1D5DB",
    color: "#111827",
    borderRadius: "4px",
    fontWeight: 600,
    fontSize: ".875rem",
  },

  span: {
    fontSize: ".875rem",
  },
});
