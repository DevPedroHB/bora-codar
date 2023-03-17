import { styled } from "@/styles";

export const Challenge11Container = styled("main", {
  width: "100%",
  height: "100%",
  minHeight: "100vh",
  backgroundColor: "#F8FAFC",
  display: "flex",
  fontFamily: "Titillium Web",
});

export const SectionForm = styled("section", {
  width: "100%",
  maxWidth: "50%",
  minWidth: "fit-content",
  padding: "2.5rem 9vw",
});

export const SectionImage = styled("section", {
  width: "100%",
  background: "url(/images/login-background.jpg) no-repeat center/cover",
  flex: 1,
});
