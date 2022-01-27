import React from 'react';
import '../../style.css';

type targetType = '_blank' | '_self' | '_parent' | '_top' | undefined;

/** Types */
export interface LinkProps {
  /** Content of heading */
  children?: React.ReactNode;
  /** The target of hyperlink */
  href: string;
  /** Specifies where to display the linked URL */
  target?: targetType;
  /** Specifies the relationship between the current document and the linked document. */
  rel?: string;
  /** Additional custom classNames */
  className?: string;
}

const Link = ({
  children,
  href,
  target,
  rel,
  className = '',
  ...rest
}: LinkProps) => (
  <a href={href} target={target} rel={rel} className={className} {...rest}>
    {children}
  </a>
);

export default Link;
