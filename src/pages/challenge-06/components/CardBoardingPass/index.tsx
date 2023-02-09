import { VariantProps } from "@stitches/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { BoardingPassCard } from "./styles";

interface ICardBoardingPass
  extends ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BoardingPassCard> {
  children?: ReactNode;
}

export function CardBoardingPass({ children, ...props }: ICardBoardingPass) {
  return <BoardingPassCard {...props}>{children}</BoardingPassCard>;
}
