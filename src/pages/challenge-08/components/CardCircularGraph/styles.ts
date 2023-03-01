import { styled } from "@/styles";

export const CardBody = styled("div", {
  maxWidth: "12.3125rem",

  ".bar-info": {
    display: "grid",
    textAlign: "center",

    strong: {
      fontSize: "2.125rem",
    },
  },
});

export const CardFooter = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1.25rem",
});

export const FooterInfo = styled("div", {
  display: "flex",
  gap: ".625rem",
  fontSize: ".875rem",
  lineHeight: "160%",
  whiteSpace: "nowrap",

  span: {
    display: "flex",
    alignItems: "center",
    gap: ".25rem",
    fontWeight: 500,

    div: {
      width: ".9375rem",
      height: ".9375rem",
      backgroundColor: "#4A4556",
      borderRadius: "50%",
    },

    "& + span": {
      fontWeight: 400,
    },
  },

  variants: {
    variant: {
      closedSales: {
        div: {
          background:
            "linear-gradient(121.94deg, #CE9FFC 15.98%, #7367F0 82.85%)",
        },
      },

      monthlyGoal: {
        div: {
          background:
            "linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%)",
        },
      },
    },
  },
});
