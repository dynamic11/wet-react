import React from 'react';
import ProgressBarRB from 'react-bootstrap/ProgressBar';
import '../../style.css';

export interface ProgressBarProps {
  /** Show label that represents visual percentage. EG. 60% */
  label?: React.ReactNode;
  /** Hide's the label visually. */
  isLabelVisible?: boolean;
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
  isLabelVisible = false,
  max = 100,
  min = 0,
  now = 0,
  className,
  ...rest
}: ProgressBarProps) => {
  const sterilizedMin = min > max ? max : min;
  const sterilizedNow =
    now < sterilizedMin ? sterilizedMin : now > max ? max : now;

  return (
    <ProgressBarRB
      label={label}
      visuallyHidden={isLabelVisible}
      max={max}
      min={sterilizedMin}
      now={sterilizedNow}
      className={className}
      {...rest}
    />
  );
};

export default ProgressBar;
