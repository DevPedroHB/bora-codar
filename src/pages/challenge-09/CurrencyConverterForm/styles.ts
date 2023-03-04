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

export const FormGroup = styled("div", {
  flex: 1,
  display: "flex",
  position: "relative",

  input: {
    width: "100%",
    minWidth: "10rem",
    padding: "1rem 1rem 1rem 2.5rem",
    backgroundColor: "transparent",
    border: ".0625rem solid #94A3B8",
    borderRight: 0,
    borderRadius: ".5rem 0 0 .5rem",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 0,
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

        svg: {
          cursor: "pointer",
        },
      },
    },
  },
});

export const CurrencySymbol = styled("span", {
  position: "absolute",
  top: "50%",
  left: "1rem",
  transform: "translateY(-50%)",
});

export const SelectTrigger = styled(Select.SelectTrigger, {
  gap: ".5rem",
  padding: "1rem",
  backgroundColor: "transparent",
  border: ".0625rem solid #94A3B8",
  borderLeft: 0,
  borderRadius: "0 .5rem .5rem 0",
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
