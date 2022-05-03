import React from 'react';
import ProgressBarRB from 'react-bootstrap/ProgressBar';
import '../../style.css';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show label that represents visual percentage. EG. 60% */
  label?: React.ReactNode;
  /** Hide's the label visually. */
  isLabelHidden?: boolean;
  /** Maximum value progress can reach */
  max?: number;
  /** Minimum value progress can begin from */
  min?: number;
  /** Current value of progress */
  now?: number;
  /** Additional custom classNames */
  className?: string;
  /** Indicates whether the element is a child member or not */
  isChild?: boolean;
}

const ProgressBar = ({
  label,
  isLabelHidden = false,
  max = 100,
  min = 0,
  now = 0,
  className,
  isChild = false,
  ...rest
}: ProgressBarProps) => {
  const sterilizedMin = min > max ? max : min;
  const sterilizedNow =
    now < sterilizedMin ? sterilizedMin : now > max ? max : now;

  return (
    <ProgressBarRB
      label={label}
      visuallyHidden={isLabelHidden}
      max={max}
      min={sterilizedMin}
      now={sterilizedNow}
      className={className}
      isChild={isChild}
      {...rest}
    />
  );
};

export default ProgressBar;
