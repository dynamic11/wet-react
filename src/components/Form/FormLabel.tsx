import React, { useContext } from 'react';
import FormRB from 'react-bootstrap/Form';
import FormGroupContext from './FormGroupContext';

export interface FormLabelProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of button */
  children?: React.ReactNode;
  /** Uses controlId from <FormGroup> if not explicitly specified. */
  htmlFor?: string;
  /** Hides the label visually while still allowing it to be read by assistive technologies */
  isVisuallyHidden?: boolean;
  /** Applies 'require' styling to form label */
  isRequired?: boolean;
  /** Allows for the customization of "required" label. It is helpful for translations. Default: "required" */
  requiredText?: string;
  /** Additional custom classNames */
  className?: string;
}

const FormLabel = ({
  children,
  htmlFor,
  isVisuallyHidden = false,
  isRequired = false,
  requiredText = 'required',
  className = '',
  ...rest
}: FormLabelProps) => {
  const { isRequiredCon } = useContext(FormGroupContext);

  const isFieldRequired = isRequired || isRequiredCon;
  const requiredStyling = isFieldRequired ? 'required' : '';

  return (
    <FormRB.Label
      htmlFor={htmlFor}
      className={`${requiredStyling} ${className}`}
      visuallyHidden={isVisuallyHidden}
      {...rest}
    >
      <>
        {children}
        {isFieldRequired && (
          <strong className="required"> ({requiredText})</strong>
        )}
      </>
    </FormRB.Label>
  );
};

FormLabel.displayName = 'Form.Label';

export default FormLabel;
