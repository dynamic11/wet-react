import React from 'react';
import InputGroupRB from 'react-bootstrap/InputGroup';
import '../../style.css';

export interface InputGroupTextProps
  extends React.HTMLAttributes<HTMLLabelElement> {
  /** Content of text label */
  children?: React.ReactNode;
  /** Sets the id of the label */
  id?: string;
  /** Additional custom classNames */
  className?: string;
}

const InputGroupText = ({
  children,
  id,
  className = '',
  ...rest
}: InputGroupTextProps) => (
  <InputGroupRB.Text id={id} className={className} {...rest}>
    {children}
  </InputGroupRB.Text>
);

InputGroupText.displayName = 'InputGroup.Text';

export default InputGroupText;
