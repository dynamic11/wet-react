import React from 'react';
import '../../style.css';

/** Types */
type variantType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | undefined;

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  /** Hidden label describing the badge */
  variant?: variantType;
  /** Hidden label describing the badge */
  visible?: boolean;
  /** Contents of label */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Label = ({
  variant = 'default',
  visible = true,
  children,
  className = '',
}: LabelProps) => {
  const variantClassName = `label-${variant}`;

  return visible ? (
    <span className={`label ${variantClassName} ${className}`}>{children}</span>
  ) : null;
};
export default Label;
