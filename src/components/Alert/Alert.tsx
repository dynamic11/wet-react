import React from 'react';
import Title from '@components/Title';
import '../../style.css';

/** Types */
type variantType = 'success' | 'warning' | 'danger' | 'info' | undefined;

type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface AlertProps {
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** Show alert */
  show?: boolean;
  /** Content of Alert */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

export interface AlertHeaderProps {
  /** Content of alert heading */
  children?: React.ReactNode;
  /** Header Level */
  level?: levelType;
  /** Additional custom classNames */
  className?: string;
}

export interface AlertLinkProps {
  /** Content of alert Link */
  children?: React.ReactNode;
  /** The target of hyperlink */
  href: string;
  /** Additional custom classNames */
  className?: string;
}

export interface AlertBodyProps {
  /** Content of alert body */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Header = ({
  level = 'h2',
  className = '',
  children,
}: AlertHeaderProps) => (
  <Title level={level} className={className}>
    {children}
  </Title>
);

const Link = ({ children, className = '', ...rest }: AlertLinkProps) => (
  <a className={`alert-link ${className}`} {...rest}>
    {children}
  </a>
);

const Body = ({ children, className = '', ...rest }: AlertBodyProps) => (
  <p className={className} {...rest}>
    {children}
  </p>
);

const Alert = ({
  variant = 'info',
  show = true,
  className = '',
  children,
  ...rest
}: AlertProps) => {
  const alertClassName =
    variant === 'success'
      ? 'alert-success'
      : variant === 'warning'
      ? 'alert-warning'
      : variant === 'danger'
      ? 'alert-danger'
      : 'alert-info';

  return show ? (
    <section className={`alert ${alertClassName} ${className}`} {...rest}>
      {children}
    </section>
  ) : null;
};

Alert.Header = Header;
Alert.Link = Link;
Alert.Body = Body;
export default Alert;
