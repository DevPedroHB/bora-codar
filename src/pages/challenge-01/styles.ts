import { styled } from "@/styles";

export const Challenge01Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "#0F0D13",
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridTemplateAreas: "'Player1 Player2' 'Player1 Player3'",
  gap: "2rem",
  placeContent: "center",
});

const Card = styled("div", {
  background: "#2A2141",
  borderRadius: ".6rem",
});

export const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.813rem",
});

export const CardPlayer1 = styled(Card, {
  gridArea: "Player1",
  padding: "2.375rem",
  display: "grid",
  gap: "1.813rem",

  img: {
    width: "11.875rem",
    height: "11.875rem",
    borderRadius: ".6rem",
  },
});

export const CardPlayer2 = styled(Card, {
  gridArea: "Player2",
  padding: "1.813rem",
  display: "grid",
  gap: "1.75rem",

  img: {
    width: "5.25rem",
    height: "5.25rem",
    borderRadius: ".6rem",
  },
});

export const CardPlayer3 = styled(Card, {
  gridArea: "Player3",
  padding: "1.813rem",
  display: "grid",
  gap: "1.75rem",

  img: {
    width: "5.25rem",
    height: "5.25rem",
    borderRadius: ".6rem",
  },
});
