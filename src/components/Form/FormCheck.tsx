import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

/** Types */
type typeType = 'checkbox' | 'radio' | 'switch' | undefined;

export interface FormCheckProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  /** title attribute */
  title?: string;
  /** label attribute */
  label?: React.ReactNode;
  /** The HTML input type, which is only relevant if as is 'input' (the default). */
  type?: typeType;
  /** Make the control disabled. */
  isDisabled?: boolean;
  /** Groups controls horizontally with other <Form.Checks>. */
  isInline?: boolean;
  /** Add "aria-invalid="true" to input */
  isInvalid?: boolean;
  /** Add "aria-required="true" to input */
  isRequired?: boolean;
  /** The status of checkbox (True/False) */
  value?: boolean;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  id?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormCheck = React.forwardRef(
  (
    {
      title = '',
      label,
      type = 'checkbox',
      isDisabled = false,
      isInline = false,
      isInvalid = false,
      isRequired = false,
      value = false,
      id,
      className = '',
      ...rest
    }: FormCheckProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <FormRB.Check
      title={title}
      label={label}
      type={type}
      disabled={isDisabled}
      inline={isInline}
      checked={value}
      aria-required={isRequired}
      aria-invalid={isInvalid}
      ref={ref}
      id={id}
      className={`${type} ${className}`}
      {...rest}
    />
  )
);

FormCheck.displayName = 'Form.Check';

export default FormCheck;
