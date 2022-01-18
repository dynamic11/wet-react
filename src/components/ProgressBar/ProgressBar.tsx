import React from 'react';
import ProgressBarRB from 'react-bootstrap/ProgressBar';
import '../../style.css';

/** Types */
type variantType =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | undefined;

export interface ProgressBarProps {
  /** Content of Progress Bar */
  children?: React.ReactNode;
  /** Show label that represents visual percentage. EG. 60% */
  label?: React.ReactNode;
  /** The styling variant that you would like to use */
  variant?: variantType;
  /** Maximum value progress can reach */
  max?: number;
  /** Minimum value progress can begin from */
  min?: number;
  /** Current value of progress */
  now?: number;
  /** Additional custom classNames */
  className?: string;
}

const ProgressBar = ({
  children,
  label,
  variant = 'default',
  max = 100,
  min = 0,
  now,
  className,
  ...rest
}: ProgressBarProps) => (
  <ProgressBarRB
    label={label}
    variant={variant}
    max={max}
    min={min}
    now={now}
    {...rest}
    className={`progress ${className}`}
  >
    {children}
  </ProgressBarRB>
);

export default ProgressBar;
