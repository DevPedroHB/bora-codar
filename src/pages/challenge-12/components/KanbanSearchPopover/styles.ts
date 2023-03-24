import { styled } from "@/styles";
import * as Popover from "@radix-ui/react-popover";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const PopoverContent = styled(Popover.Content, {
  padding: "1.375rem",
  backgroundColor: "#FFFFFF",
  border: ".125rem solid transparent",
  borderRadius: ".5rem",
  boxShadow: "0px .25rem 1rem #EAE2FD",
  position: "relative",
});

export const PopoverClose = styled(Popover.Close, {
  position: "absolute",
  top: ".25rem",
  right: ".25rem",
  backgroundColor: "transparent",
  color: "#403937",
  border: 0,
  borderRadius: "999px",
  transition: "color .2s",

  svg: {
    lineHeight: 0,
  },

  "&:hover": {
    color: "#7C3AED",
  },
});

export const PopoverArrow = styled(Popover.Arrow, {
  fill: "#FFFFFF",
  boxShadow: "0px .25rem 1rem rgba(22, 22, 22, 0.1)",
});

export const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: "grid",
  gap: ".5rem",
});

export const ToggleGroupItem = styled(ToggleGroup.Item, {
  padding: ".25rem .5rem",
  backgroundColor: "#E2D6FF",
  color: "#7C3AED",
  border: 0,
  borderRadius: ".5rem",
  fontSize: ".6875rem",

  "&[data-state=on]": {
    filter: "brightness(90%)",
  },
});
