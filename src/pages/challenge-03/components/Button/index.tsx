import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonComponent } from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  animated?: boolean;
  loading?: boolean;
  movable?: boolean;
}

export function Button({
  children,
  variant,
  animated,
  loading,
  movable,
  ...props
}: IButton) {
  return (
    <ButtonComponent
      variant={variant}
      animated={animated}
      loading={loading}
      movable={movable}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
}
