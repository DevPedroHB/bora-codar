import { styled } from "@/styles";
import * as Select from "@radix-ui/react-select";

export const CurrencyConverterFormContainer = styled("div", {
  display: "grid",
  gap: "1rem",
});

export const Form = styled("form", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
});

export const InputWrapper = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  position: "relative",
  border: ".0625rem solid #94A3B8",
  borderRadius: ".5rem",
  padding: "1rem",

  "> span": {
    marginRight: ".25rem",
  },

  input: {
    width: "100%",
    minWidth: "5rem",
    backgroundColor: "transparent",
    border: "0",
    borderRight: "1px solid #94A3B8",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 0,
    color: "#0F172A",
  },

  "&:has(:focus)": {
    border: ".0938rem solid #7C3AED",
  },

  "&:has(:hover)": {
    border: ".0938rem solid #7C3AED",
  },
});

export const InvertValues = styled("div", {
  flex: 0,
  lineHeight: 0,
  cursor: "pointer",
});

export const SelectTrigger = styled(Select.SelectTrigger, {
  gap: ".5rem",
  paddingLeft: "1rem",
  backgroundColor: "transparent",
  border: 0,
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "150%",
  color: "#0F172A",
  display: "flex",
});

export const SelectIcon = styled(Select.SelectIcon, {
  display: "flex",
});

export const SelectContent = styled(Select.Content, {
  backgroundColor: "#FFFFFF",
  borderRadius: ".5rem",
  boxShadow: "0rem .25rem 1rem rgba(15, 23, 42, 0.15)",
});

export const SelectItem = styled(Select.Item, {
  padding: ".75rem 1rem",
  transition: "background-color .2s",

  "&[data-highlighted]": {
    backgroundColor: "#EDE9FE",
  },
});

export const SelectItemIndicator = styled(Select.ItemIndicator, {
  verticalAlign: "middle",
  paddingLeft: ".5rem",
  color: "#7C3AED",
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
