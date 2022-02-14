import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

export interface FormLabelProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of button */
  children?: React.ReactNode;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  htmlFor?: string;
  /** Hides the label visually while still allowing it to be read by assistive technologies */
  isVisuallyHidden?: boolean;
  /** Additional custom classNames */
  className?: string;
}

const FormLabel = ({
  children,
  htmlFor,
  isVisuallyHidden = false,
  className = '',
  ...rest
}: FormLabelProps) => (
  <FormRB.Label
    htmlFor={htmlFor}
    className={className}
    visuallyHidden={isVisuallyHidden}
    {...rest}
  >
    {children}
  </FormRB.Label>
);

FormLabel.displayName = 'Form.Label';

export default FormLabel;
