import React from 'react';
import FormRB from 'react-bootstrap/Form';
import '../../style.css';

/** Types */
type sizeType = 'lg' | 'sm' | 'default' | undefined;

export interface FormSelectProps {
  /** Content of button */
  children?: React.ReactNode;
  /** Placeholder content */
  placeholder?: string;
  /** Make the control disabled. */
  isDisabled?: boolean;
  /** Add "aria-invalid="true" to input */
  isInvalid?: boolean;
  /** Add "aria-required="true" to input */
  isRequired?: boolean;
  /** The size attribute of the underlying HTML element. Specifies the number of visible options.. */
  htmlSize?: number;
  /** Input size variants */
  size?: sizeType;
  /** A callback fired when the value prop changes */
  onChange;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  id?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormSelect = ({
  children,
  placeholder,
  htmlSize,
  isDisabled = false,
  isInvalid = false,
  isRequired = false,
  size = 'default',
  onChange,
  id,
  className = '',
  ...rest
}: FormSelectProps) => {
  const sizeClassName =
    size === 'sm' ? 'input-sm' : size === 'lg' ? 'input-lg' : '';

  return (
    <FormRB.Select
      disabled={isDisabled}
      aria-required={isRequired}
      aria-invalid={isInvalid}
      onChange={onChange}
      placeholder={placeholder}
      htmlSize={htmlSize}
      id={id}
      className={`${sizeClassName} form-control ${className}`}
      {...rest}
    >
      {children}
    </FormRB.Select>
  );
};

FormSelect.displayName = 'Form.Select';

export default FormSelect;