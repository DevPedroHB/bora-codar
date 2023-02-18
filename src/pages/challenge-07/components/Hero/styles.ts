import { styled } from "@/styles";
import * as Select from "@radix-ui/react-select";

export const HeroContainer = styled("div", {
  fontFamily: "Roboto",
  position: "relative",
  width: "100%",
  backgroundColor: "#F8F8FF",

  img: {
    position: "absolute",

    "&:nth-child(1)": {
      width: "100%",
      height: "auto",
      maxWidth: "25.438rem",
      top: 0,
      left: 0,
    },

    "&:nth-child(2)": {
      width: "100%",
      height: "auto",
      maxWidth: "25.875rem",
      bottom: 0,
      right: 0,
    },
  },
});

export const HeroContent = styled("div", {
  position: "relative",
  zIndex: 1,
  maxWidth: "65.063rem",
  margin: "0 auto",
  padding: "6.25rem 1.5rem",
});

export const HeroTitle = styled("div", {
  maxWidth: "40.438rem",
  margin: "0 auto",
  textAlign: "center",
  marginBottom: "2.5rem",

  p: {
    marginBottom: "1.125rem",
    textTransform: "uppercase",
    color: "#E45858",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: "160%",
    letterSpacing: "0.1em",
  },

  h1: {
    color: "#121214",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: "125%",

    span: {
      color: "#6246EA",
    },
  },
});

export const HeroSearch = styled("form", {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  backgroundColor: "#FFF",
  border: "1px solid #EAEAEA",
  borderRadius: "10px",
  padding: "2.5rem",

  "@bp2": {
    flexDirection: "column",
  },
});

export const HeroSearchGroup = styled("div", {
  width: "100%",
  position: "relative",

  input: {
    width: "100%",
    backgroundColor: "#F4F4FF",
    border: 0,
    borderRadius: "5px",
    fontSize: "1rem",
    color: "#7C7C8A",
    padding: ".75rem .5rem .75rem 3.125rem",
  },

  svg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: ".875rem",
  },

  small: {
    position: "absolute",
    left: 0,
    bottom: "-1.25rem",
    color: "#E45858",
  },
});

export const HeroSearchButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: ".25rem",
  width: "min-content",
  backgroundColor: "#6246EA",
  color: "#FFF",
  border: 0,
  borderRadius: "5px",
  padding: ".75rem 2rem",
  fontSize: ".875rem",
  fontWeight: 700,
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "filter .2s",
  whiteSpace: "nowrap",

  "&:disabled": {
    opacity: 0.8,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    filter: "brightness(110%)",
  },
});

export const SelectTrigger = styled(Select.SelectTrigger, {
  width: "100%",
  backgroundColor: "#F4F4FF",
  border: 0,
  borderRadius: "5px",
  fontSize: "1rem",
  color: "#7C7C8A",
  padding: ".75rem .5rem .75rem 3.125rem",
  textAlign: "start",
});

export const SelectIcon = styled(Select.SelectIcon, {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "calc(.875rem + 2rem)",
});

export const SelectContent = styled(Select.Content, {
  backgroundColor: "#FFF",
  color: "#7C7C8A",
  border: "1px solid #EAEAEA",
  borderRadius: "10px",
  padding: "1rem",
});

export const SelectLabel = styled(Select.Label, {
  fontWeight: 700,
  textTransform: "uppercase",
  paddingBottom: ".5rem",
});

export const SelectItem = styled(Select.Item, {
  borderRadius: "5px",
  padding: ".75rem",
  transition: "background-color .2s",

  "&[data-highlighted]": {
    backgroundColor: "#F4F4FF",
  },
});

export const StyledItemIndicator = styled(Select.ItemIndicator, {
  verticalAlign: "middle",
  paddingLeft: ".5rem",
  color: "#6246EA",
});

const scrollButtonStyles = {
  textAlign: "center",
};

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  scrollButtonStyles
);

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
);
