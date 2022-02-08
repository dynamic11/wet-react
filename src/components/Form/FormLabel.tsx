import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

/** Types */
type variantType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'link'
  | 'info'
  | undefined;

type sizingType = 'lg' | 'sm' | 'xs' | undefined;

type typeType = 'submit' | 'button' | 'reset' | undefined;
type asType = 'input';

export interface FormLabelProps {
  /** Content of button */
  children?: React.ReactNode;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  htmlFor?: string;
  /** Hides the label visually while still allowing it to be read by assistive technologies */
  visuallyHidden?: boolean;
  /** Additional custom classNames */
  className?: string;
}

const FormLabel = ({
  children,
  htmlFor,
  visuallyHidden = false,
  className = '',
  ...rest
}: FormLabelProps) => (
  <FormRB.Label
    htmlFor={htmlFor}
    className={className}
    visuallyHidden={visuallyHidden}
    {...rest}
  >
    {children}
  </FormRB.Label>
);

FormLabel.displayName = 'Form.Label';

export default FormLabel;
