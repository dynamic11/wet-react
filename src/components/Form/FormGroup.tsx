import React, { useMemo } from 'react';
import FormRB from 'react-bootstrap/Form';
import FormGroupContext from './FormGroupContext';

export interface FormGroupProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of group */
  children?: React.ReactNode;
  /** Unique Id of form group elements */
  controlId?: string;
  /** Additional custom classNames */
  className?: string;
  /** Applies 'require' styling to form group */
  isRequired?: boolean;
  /** Sets whether form input is valid */
  isInvalid?: boolean;
}

const FormGroup = ({
  children,
  controlId,
  isRequired = false,
  isInvalid = false,
  className = '',
  ...rest
}: FormGroupProps) => {
  const invalidClassName = isInvalid ? 'has-error' : '';
  const context = useMemo(
    () => ({ isRequiredCon: isRequired, isInvalidCon: isInvalid }),
    [isRequired, isInvalid]
  );

  return (
    <FormRB.Group
      className={`form-group ${invalidClassName} ${className}`}
      controlId={controlId}
      {...rest}
    >
      <FormGroupContext.Provider value={context}>
        {children}
      </FormGroupContext.Provider>
    </FormRB.Group>
  );
};

FormGroup.displayName = 'Form.Group';

export default FormGroup;
