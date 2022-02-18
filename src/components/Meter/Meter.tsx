import React from 'react';

import '../../style.css';

export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The value of the meter */
  value: number;
  /** The upper limit of the meter */
  max: number;
  /** The lower limit of the meter */
  min: number;
  /** The point at which a value can be considered low */
  low?: number;
  /** The point at which a value can be considered high */
  high?: number;
}

const Meter = ({
  max = 100,
  min = 0,
  value = 0,
  low = 0,
  high = 100,
  children,
  ...rest
}: MeterProps) => {
  const sterilizedMin = min > max ? max : min;
  const sterilizedValue =
    value < sterilizedMin ? sterilizedMin : value > max ? max : value;

  const sterilizedLow = low < min ? min : low;
  const sterilizedHigh = high > max ? max : high;
  return (
    <meter
      min={sterilizedMin}
      max={max}
      value={sterilizedValue}
      low={sterilizedLow}
      high={sterilizedHigh}
    />
  );
};

export default Meter;
