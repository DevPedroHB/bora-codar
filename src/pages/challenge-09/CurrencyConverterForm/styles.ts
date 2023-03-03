import { styled } from "@/styles";
import * as Select from "@radix-ui/react-select";

export const CurrencyConverterFormContainer = styled("div", {
  display: "grid",
  gap: "16px",
});

export const Form = styled("form", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
});

export const FormGroup = styled("div", {
  flex: 1,
  display: "flex",

  input: {
    width: "100%",
    minWidth: "10rem",
    padding: "16px",
    backgroundColor: "transparent",
    border: ".0625rem solid #94A3B8",
    borderRight: 0,
    borderRadius: "8px 0 0 8px",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "150%",
    color: "#0F172A",

    "&:focus": {
      outline: 0,
      border: ".0625rem solid #7C3AED",
      borderRight: 0,
    },
  },

  variants: {
    icon: {
      true: {
        flex: 0,
      },
    },
  },
});

export const SelectTrigger = styled(Select.SelectTrigger, {
  gap: ".5rem",
  padding: "16px",
  backgroundColor: "transparent",
  border: ".0625rem solid #94A3B8",
  borderLeft: 0,
  borderRadius: "0 8px 8px 0",
  fontWeight: 400,
  fontSize: "16px",
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
  boxShadow: "0px 4px 16px rgba(15, 23, 42, 0.15)",
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
