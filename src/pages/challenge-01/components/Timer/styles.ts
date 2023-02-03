import { styled } from "@/styles";
import * as Progress from "@radix-ui/react-progress";

export const TimerContainer = styled("div", {
  display: "grid",
  gap: ".6rem",
});

export const ProgressRoot = styled(Progress.Root, {
  position: "relative",
  overflow: "hidden",
  background: "rgba(217, 217, 217, .3)",
  borderRadius: ".6rem",
  width: "100%",
  height: ".375rem",
  transform: "translateZ(0)",
});

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: "#D9D9D9",
  width: "100%",
  height: "100%",
  transition: "all .2s ease-in-out",
});

export const TimerClock = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  color: "#C4C4CC",
  fontSize: ".875rem",
  lineHeight: 1.6,
});
