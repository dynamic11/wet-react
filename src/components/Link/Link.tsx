import React from "react";
import "../../style.css";

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

const Link = ({ children, href = "#", target, rel, className }: LinkProps) => (
  <a href={href} target={target} className={className} rel={rel}>
    {children}
  </a>
);

export default Link;
