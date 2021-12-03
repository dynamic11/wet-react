import React from "react";
import { default as ButtonRB } from "react-bootstrap/Button";
import "../../style.css";

type variantType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "link"
  | "info"
  | "dark";

type sizingType = "lg" | "sm";

type typeType = "submit" | "button" | "reset";
type asType = "input";

export interface ButtonProps {
  /** Content of button */
  children?: React.ReactNode;
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** The custom 'non-default' button size that you would like */
  size?: sizingType;
  /** Additional custom classNames */
  className?: string;
  /** Is button in Active state */
  active?: boolean;
  /** Is button in Disabled state */
  disabled?: boolean;
  /** Link for button. It will render as `<a>` but with button styling */
  href?: string;
  /** Type of button */
  type?: typeType;
  /** Value associated to the button */
  value?: string;
  as?: asType;
  /** Onclick action */
  onClick?: React.MouseEventHandler;
}

const Button = ({
  children,
  variant = "primary",
  active = false,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonRB variant={variant} active={active} disabled={disabled} {...rest}>
      {children}
    </ButtonRB>
  );
};

export default Button;
