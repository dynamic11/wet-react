import React from 'react';
import InputGroupRB from 'react-bootstrap/InputGroup';

import '../../style.css';

/** Types */
type sizeType = 'sm' | 'lg';

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLInputElement> {
  /** Content of input group */
  children?: React.ReactNode;
  /** Control the size of buttons and form elements from the top-level. */
  size?: sizeType;
  /** Additional custom classNames */
  className?: string;
}

const InputGroup = ({
  children,
  size,
  className = '',
  ...rest
}: InputGroupProps) => (
  <InputGroupRB size={size} className={className} {...rest}>
    {children}
  </InputGroupRB>
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
