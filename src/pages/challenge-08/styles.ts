import { styled } from "@/styles";

export const Challenge08Container = styled("main", {
  fontFamily: "Inter",
  color: "#FFF",
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#292738",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Challenge08Content = styled("div", {
  maxWidth: "73rem",
  width: "100%",
  margin: "0 auto",
  padding: "1.5rem",
  display: "grid",
  gap: "3.6875rem",
});

export const CardGroup = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(18.5rem, auto))",
  gap: "2rem",
});

export const CardTitle = styled("h2", {
  fontWeight: 600,
  fontSize: "1.5rem",
  lineHeight: "160%",
  textAlign: "center",

  variants: {
    alignStart: {
      true: {
        textAlign: "start",
      },
    },
  },
});

export const CardBody = styled("div", {
  maxWidth: "12.3125rem",
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
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1.25rem",

  variants: {
    variant: {
      closedSales: {
        "div + div span div": {
          background:
            "linear-gradient(121.94deg, #CE9FFC 15.98%, #7367F0 82.85%)",
        },
      },
      monthlyGoal: {
        "div + div span div": {
          background:
            "linear-gradient(121.94deg, #DF9780 15.98%, #A66DE9 82.85%)",
        },
      },
    },
  },
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
  },

  small: {
    fontWeight: 400,
  },
});
