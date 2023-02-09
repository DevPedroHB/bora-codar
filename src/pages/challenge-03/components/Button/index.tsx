import { VariantProps } from "@stitches/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent } from "./styles";

interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonComponent> {
  children?: ReactNode;
}

export function Button({ children, ...props }: IButton) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}
