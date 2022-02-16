import React from 'react';
import '../../style.css';

/** Types */
type variantType = 'success' | 'warning' | 'danger' | 'info' | undefined;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** Show alert */
  isVisible?: boolean;
  /** Content of Alert */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Alert = ({
  variant = 'info',
  isVisible = true,
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

  return isVisible ? (
    <section className={`alert ${alertClassName} ${className}`} {...rest}>
      {children}
    </section>
  ) : null;
};

Alert.displayName = 'Alert';

export default Alert;
