import { styled } from "@/styles";

export const UploadDragFileComponent = styled("section", {
  width: "100%",
  maxWidth: "27.5rem",
  padding: "1.75rem 0 2rem",
  backgroundColor: "#F3F0FF",
  border: "1px dashed #C1B2FA",
  borderRadius: "8px",
  textAlign: "center",
  position: "relative",

  h3: {
    marginTop: ".75rem",
    color: "#7A5FEC",
    fontSize: "1rem",
  },

  p: {
    marginTop: ".0625rem",
    color: "#746E82",
    fontSize: ".875rem",
  },

  input: {
    all: "unset",
    opacity: 0,
    inset: 0,
    position: "absolute",
  },

  variants: {
    isDragover: {
      true: {
        backgroundColor: "#EBE6FF",
      },
    },
  },
});
