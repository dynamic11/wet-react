import React, { useContext } from 'react';
import FormRB from 'react-bootstrap/Form';
import FormGroupContext from './FormGroupContext';

export interface FormLabelProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of form label */
  children?: React.ReactNode;
  /** Set a custom element for this component */
  as?: React.ElementType;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  htmlFor?: string;
  /** Hides the label visually while still allowing it to be read by assistive technologies */
  isVisuallyHidden?: boolean;
  /** Applies 'require' styling to form label */
  isRequired?: boolean;
  /** Show the "required styling" for the field */
  showRequiredStyling?: boolean;
  /** Allows for the customization of "required" label. It is helpful for translations. Default: "required" */
  requiredText?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const FormLabel = ({
  children,
  as = 'label',
  htmlFor,
  isVisuallyHidden = false,
  isRequired = false,
  requiredText = 'required',
  showRequiredStyling = true,
  className = '',
  ...rest
}: FormLabelProps) => {
  const { isRequiredCon } = useContext(FormGroupContext);

  const isFieldRequired = isRequired || isRequiredCon;
  const requiredStyling =
    isFieldRequired && showRequiredStyling ? 'required' : '';

  return (
    <FormRB.Label
      htmlFor={htmlFor}
      as={as}
      className={`${requiredStyling} ${className}`}
      visuallyHidden={isVisuallyHidden}
      {...rest}
    >
      <>
        {children}
        {isFieldRequired && showRequiredStyling && (
          <strong className="required"> ({requiredText})</strong>
        )}
      </>
    </FormRB.Label>
  );
};

FormLabel.displayName = 'Form.Label';

export default FormLabel;
