import React, { useContext } from 'react';
import FormRB from 'react-bootstrap/Form';
import FormLabel from './FormLabel';
import FormGroupContext from './FormGroupContext';

/** Types */
type typeType = 'checkbox' | 'radio' | 'switch' | undefined;

export interface FormCheckProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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
  /** Is field required */
  isRequired?: boolean;
  /** Show the "required styling" for the field */
  showRequiredStyling?: boolean;
  /** Allows for the customization of "required" label. It is helpful for translations. Default: "required" */
  requiredText?: string;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  id?: string;
  /** Name of form field. */
  name?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormCheck = React.forwardRef(
  (
    {
      label,
      type = 'checkbox',
      isDisabled = false,
      isInline = false,
      isInvalid = false,
      isRequired = false,
      showRequiredStyling = true,
      requiredText = 'required',
      id,
      name = '',
      className = '',
      ...rest
    }: FormCheckProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { isRequiredCon, isInvalidCon } = useContext(FormGroupContext);
    const isRequiredResult = isRequired || isRequiredCon;
    const isInvalidResult = isRequired || isInvalidCon || isInvalid;

    const requiredClassName =
      isRequiredResult && showRequiredStyling && type === 'checkbox'
        ? 'required'
        : '';

    return (
      <FormRB.Check
        type={type}
        inline={isInline}
        id={id}
        className={`${type} ${requiredClassName} ${className}`}
      >
        <FormRB.Check.Label className="check-label">
          <FormRB.Check.Input
            type={type as any}
            disabled={isDisabled}
            aria-required={isRequiredResult}
            aria-invalid={isInvalidResult}
            ref={ref}
            name={name}
            {...rest}
          />
          <FormLabel
            as="span"
            showRequiredStyling={
              isRequiredResult && showRequiredStyling && type === 'checkbox'
            }
          >
            {label}
          </FormLabel>
        </FormRB.Check.Label>
      </FormRB.Check>
    );
  }
);

FormCheck.displayName = 'Form.Check';

export default FormCheck;
