import { styled } from "@/styles";

export const AirQualityContainer = styled("section", {
  flex: 1,
  padding: "1rem 1.125rem",
  backgroundColor: "#6d67d0",
  backdropFilter: "blur(1rem)",
  borderRadius: ".625rem",
  display: "grid",
  gap: "2rem",
  fontWeight: 700,
  textAlign: "center",

  h2: {
    fontSize: "1rem",
    color: "#dad8f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    marginTop: "1rem",
  },

  "> div": {
    "> p": {
      fontSize: "1.125rem",
      color: "#87ebcd",
    },

    "> p + p": {
      marginTop: ".25rem",
      fontSize: "2.5rem",
      color: "#e7e6fb",
    },
  },
});

export const Info = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const InfoNumber = styled("div", {
  flex: 1,
  display: "grid",
  gap: ".125rem",

  p: {
    color: "#87ebcd",
    fontSize: ".875rem",
  },

  small: {
    color: "#e7e6fb",
    fontSize: ".75rem",
    fontWeight: 400,
  },
});
