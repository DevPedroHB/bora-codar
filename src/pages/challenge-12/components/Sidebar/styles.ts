import { styled } from "@/styles";
import Link from "next/link";

export const KanbanSidebarComponent = styled("aside", {
  height: "100vh",
  padding: "2rem 1.6875rem 2rem 2.1875rem",
  backgroundColor: "#7C3AED",
  display: "flex",
  flexDirection: "column",
  gap: "3.75rem",
  position: "relative",

  img: {
    width: "3.125rem",
    height: "auto",
    objectFit: "cover",
  },

  variants: {
    toggle: {
      false: {
        img: {
          width: "1.25rem",
          height: "auto",
          objectFit: "cover",
        },

        "div a span": {
          display: "none",
        },
      },
    },
  },

  "@bp2": {
    position: "fixed",
    zIndex: 1,
  },
});

export const SidebarMenuToggle = styled("button", {
  position: "absolute",
  right: "-.75rem",
  padding: ".25rem",
  backgroundColor: "#7C3AED",
  border: 0,
  borderRadius: "999px",
  lineHeight: 0,

  svg: {
    color: "#FFFFFF",
    transition: "transform .2s",
  },

  variants: {
    toggle: {
      true: {
        svg: {
          transform: "rotate(-180deg)",
        },
      },
    },
  },
});

export const SidebarMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "2.25rem",
});

export const SidebarLink = styled(Link, {
  width: "fit-content",
  color: "#CAB3FF",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color .2s",
  fontSize: "1rem",

  "&:hover": {
    color: "#FFFFFF",
  },

  variants: {
    active: {
      true: {
        fontWeight: 700,
        color: "#FFFFFF",
      },
    },
  },
});
