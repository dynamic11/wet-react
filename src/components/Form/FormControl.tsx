import React, { useContext } from 'react';
import FormRB from 'react-bootstrap/Form';
import FormGroupContext from './FormGroupContext';

/** Types */
type sizeType = 'lg' | 'sm' | 'default' | undefined;

type asType = 'input' | 'textarea' | undefined;

type typeType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | undefined;

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface FormControlProps
  extends React.HTMLAttributes<FormControlElement> {
  /** Placeholder content */
  placeholder?: string;
  /** Placeholder content */
  defaultValue?: string | string[] | number;
  /** The value attribute of underlying input */
  value?: string | string[] | number;
  /** The underlying HTML element to use when rendering the FormControl. */
  as?: asType;
  /** The HTML input type, which is only relevant if as is 'input' (the default). */
  type?: typeType;
  /** Make the control disabled. */
  isDisabled?: boolean;
  /** Make the control readonly. */
  isReadOnly?: boolean;
  /** Add "aria-invalid="true" to input */
  isInvalid?: boolean;
  /** Add "aria-required="true" to input */
  isRequired?: boolean;
  /** The size attribute of the underlying HTML element. Specifies the visible width in characters if as is 'input'. */
  htmlSize?: number;
  /** Input size variants: 'default', 'sm', 'lg' */
  size?: sizeType;
  /** A callback fired when the value prop changes */
  onChange?: React.ChangeEventHandler<FormControlElement>;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  id?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormControl = React.forwardRef(
  (
    {
      placeholder,
      value = '',
      defaultValue,
      as,
      type = 'text',
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isRequired = false,
      htmlSize,
      size = 'default',
      onChange,
      id,
      className = '',
      ...rest
    }: FormControlProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const { isRequiredCon, isInvalidCon } = useContext(FormGroupContext);

    const sizeClassName =
      size === 'sm' ? 'input-sm' : size === 'lg' ? 'input-lg' : '';

    return (
      <FormRB.Control
        as={as}
        type={type}
        disabled={isDisabled}
        readOnly={isReadOnly}
        aria-required={isRequired || isRequiredCon}
        aria-invalid={isInvalid || isInvalidCon}
        htmlSize={htmlSize}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        ref={ref}
        id={id}
        className={`${sizeClassName} ${className}`}
        {...rest}
      />
    );
  }
);

FormControl.displayName = 'Form.Control';

export default FormControl;
