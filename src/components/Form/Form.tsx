import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Content of Form */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const Form = ({ children, className = '', ...rest }: FormProps) => (
  <FormRB className={className} {...rest}>
    {children}
  </FormRB>
);

export default Form;
