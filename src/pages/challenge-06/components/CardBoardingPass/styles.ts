import { styled } from "@/styles";

export const BoardingPassCard = styled("div", {
  width: "20.5rem",
  background: "#FFF",
  padding: "1.5rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  variants: {
    modelOne: {
      true: {
        borderRadius: "1.5rem",
      },
    },

    modelTwo: {
      top: {
        borderRadius: "1.5rem 1.5rem 0 0",
        background:
          "linear-gradient(315deg, transparent 10px, #fff 0) bottom right, linear-gradient(45deg, transparent 10px, #fff 0) bottom left",
        backgroundSize: "51% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0) 14px, #fff 15px), radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0) 14px, #fff 15px)",
      },

      middle: {
        borderRadius: "0",
        background:
          "linear-gradient(135deg, transparent 1rem, #fff 0) top left, linear-gradient(225deg, transparent 1rem, #fff 0) top right, linear-gradient(315deg, transparent 1rem, #fff 0) bottom right, linear-gradient(45deg, transparent 1rem, #fff 0) bottom left",
        backgroundSize: "60% 51%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(circle at 0 0, rgba(0, 0, 0, 0) 14px, #fff 15px), radial-gradient(circle at 100% 0, rgba(0, 0, 0, 0) 14px, #fff 15px), radial-gradient(circle at 100% 100%, rgba(0, 0, 0, 0) 14px, #fff 15px), radial-gradient(circle at 0 100%, rgba(0, 0, 0, 0) 14px, #fff 15px)",
      },

      bottom: {
        borderRadius: "0 0 1.5rem 1.5rem",
        background:
          "linear-gradient(135deg, transparent 10px, #fff 0) top left, linear-gradient(225deg, transparent 10px, #fff 0) top right",
        backgroundSize: "51% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(circle at 0 0, rgba(0, 0, 0, 0) 14px, #fff 15px), radial-gradient(circle at 100% 0, rgba(0, 0, 0, 0) 14px, #fff 15px)",
      },
    },
  },

  defaultVariants: {
    modelOne: true,
  },
});
