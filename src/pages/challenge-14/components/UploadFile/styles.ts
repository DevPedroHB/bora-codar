import { styled } from "@/styles";
import * as Progress from "@radix-ui/react-progress";

export const UploadFileComponent = styled("div", {
  padding: ".5rem",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 4px 16px #EAE2FD",
  borderRadius: "8px",
  display: "flex",
  gap: ".75rem",
  position: "relative",

  "> svg": {
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
    cursor: "pointer",
  },

  variants: {
    variant: {
      uploading: {
        "--upload-file-status-bg": "#E9E3F8",
        "--upload-file-status-color": "#AC96E4",
        "--upload-file-status-bar":
          "linear-gradient(90deg, rgba(58, 97, 237, 0.52) 0%, #7C3AED 100%)",
      },

      success: {
        "--upload-file-status-bg": "#DAF2D9",
        "--upload-file-status-color": "#73B172",
        "--upload-file-status-bar": "#73B172",
      },

      error: {
        "--upload-file-status-bg": "#F2D9D9",
        "--upload-file-status-color": "#E36363",
        "--upload-file-status-bar": "#E3E3ED",
      },
    },
  },
});

export const UploadFileIcon = styled("div", {
  padding: "1rem",
  backgroundColor: "var(--upload-file-status-bg)",
  borderRadius: "4px",
  lineHeight: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    color: "var(--upload-file-status-color)",
  },
});

export const UploadFileInfoWrapper = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const UploadFileInfo = styled("div", {
  display: "grid",

  strong: {
    color: "#575361",
    fontSize: ".875rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 1,
  },

  span: {
    color: "#857E95",
    fontSize: ".75rem",
  },
});

export const UploadFileProgressWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".5rem",

  span: {
    color: "var(--upload-file-status-color)",
    fontSize: ".75rem",
  },
});

export const UploadFileProgressRoot = styled(Progress.Root, {
  flex: 1,
  width: "100%",
  height: ".5rem",
  backgroundColor: "#E3E3ED",
  borderRadius: "999px",
  position: "relative",
  overflow: "hidden",
});

export const UploadFileProgressIndicator = styled(Progress.Indicator, {
  width: "100%",
  height: "100%",
  background: "var(--upload-file-status-bar)",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
});
