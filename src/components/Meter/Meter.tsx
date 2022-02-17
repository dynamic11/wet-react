import React from 'react';

import '../../style.css';

export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The value of the meter */
  value: number;
  /** The upper limit of the meter */
  max: number;
  /** The lower limit of the meter */
  min: number;
}

const Meter = ({
  max = 100,
  min = 0,
  value = 0,
  children,
  ...rest
}: MeterProps) => <meter min={min} max={max} value={value} />;

export default Meter;
