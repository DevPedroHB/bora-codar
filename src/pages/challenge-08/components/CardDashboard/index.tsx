import { VariantProps } from "@stitches/react";
import { HTMLAttributes, ReactNode } from "react";
import { CardDashboardContainer } from "./styles";

interface ICardDashboard
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardDashboardContainer> {
  children: ReactNode;
}

export function CardDashboard({ children, ...props }: ICardDashboard) {
  return <CardDashboardContainer {...props}>{children}</CardDashboardContainer>;
}
