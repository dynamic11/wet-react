import React from "react";
import "../../style.css";

/** Types */
export interface LinkProps {
  /** Content of heading */
  children?: React.ReactNode;
  /** The target of hyperlink */
  href: string;
  /** Specifies where to display the linked URL */
  target?: string;
  /** Specifies the relationship between the current document and the linked document. */
  rel?: string;
  /** Additional custom classNames */
  className?: string;
}

const Link = ({ children, href = "#", target, rel, ...rest }: LinkProps) => (
  <a href={href} target={target} rel={rel} {...rest}>
    {children}
  </a>
);

export default Link;
