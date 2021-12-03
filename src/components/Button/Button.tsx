import React from "react";
import { default as ButtonRB } from "react-bootstrap/Button";
import "../../style.css";

type varientTypes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "link"
  | "info"
  | "dark"
  | "outline-primary"
  | "outline-secondary"
  | "outline-success"
  | "outline-warning"
  | "outline-danger"
  | "outline-info"
  | "outline-light"
  | "outline-dark";

type sizingTypes = "lg" | "sm";

type typeTypes = "submit" | "button" | "reset";
type asTypes = "input";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: varientTypes;
  size?: sizingTypes;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  type?: typeTypes;
  value?: string;
  as?: asTypes;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonRB {...rest}>{children}</ButtonRB>;
};

export default Button;
