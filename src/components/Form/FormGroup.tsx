import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

export interface FormGroupProps {
  /** Content of button */
  children?: React.ReactNode;
  /** Unique Id of form group elements */
  controlId?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormGroup = ({
  children,
  controlId,
  className = '',
  ...rest
}: FormGroupProps) => (
  <FormRB.Group
    className={`form-group ${className}`}
    controlId={controlId}
    {...rest}
  >
    {children}
  </FormRB.Group>
);

FormGroup.displayName = 'Form.Group';

export default FormGroup;
