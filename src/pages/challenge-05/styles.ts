import { styled } from "@/styles";

export const Challenge05Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  background: "#807ECE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "> div": {
    background: "#2D2A37",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22)",
    borderRadius: "3rem",
    padding: "2rem",
    margin: "2rem auto",
  },
});
