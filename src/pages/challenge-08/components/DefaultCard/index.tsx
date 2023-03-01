import { VariantProps } from "@stitches/react";
import { HTMLAttributes, ReactNode } from "react";
import { DefaultCardContainer } from "./styles";

interface IDefaultCard
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof DefaultCardContainer> {
  children: ReactNode;
}

export function DefaultCard({ children, ...props }: IDefaultCard) {
  return <DefaultCardContainer {...props}>{children}</DefaultCardContainer>;
}
