import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

export interface FormTextProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of button */
  children?: React.ReactNode;
  /** A convenience prop for add the text-muted class, since it's so commonly used here. */
  isMuted?: boolean;
  /** Hides the label visually while still allowing it to be read by assistive technologies */
  visuallyHidden?: boolean;
  /** Additional custom classNames */
  className?: string;
}

const FormText = ({
  children,
  isMuted = true,
  className = '',
  ...rest
}: FormTextProps) => (
  <FormRB.Text muted={isMuted} className={className} {...rest}>
    {children}
  </FormRB.Text>
);

FormText.displayName = 'Form.Text';

export default FormText;
