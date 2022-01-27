import React from 'react';
import ButtonGroupRB from 'react-bootstrap/ButtonGroup';
import '../../style.css';

/** Types */
type sizingType = 'lg' | 'sm' | undefined;

export interface ButtonGroupProps {
  /** The custom 'non-default' size of button group */
  size?: sizingType;
  /** Orientation of button group */
  isVertical?: boolean;
  /** Buttons to group */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const ButtonGroup = ({
  size,
  isVertical = false,
  children,
  ...rest
}: ButtonGroupProps) => (
  <ButtonGroupRB size={size} vertical={isVertical} {...rest}>
    {children}
  </ButtonGroupRB>
);

export default ButtonGroup;
