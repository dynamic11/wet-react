import React from 'react';
import ProgressBarRB from 'react-bootstrap/ProgressBar';
import '../../style.css';

export interface ProgressBarProps {
  /** Show label that represents visual percentage. EG. 60% */
  label?: React.ReactNode;
  /** Hide's the label visually. */
  visuallyHidden?: boolean;
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
  label,
  visuallyHidden = false,
  max = 100,
  min = 0,
  now,
  className,
  ...rest
}: ProgressBarProps) => (
  <ProgressBarRB
    label={label}
    visuallyHidden={visuallyHidden}
    max={max}
    min={min}
    now={now}
    {...rest}
    className={className}
  />
);

export default ProgressBar;