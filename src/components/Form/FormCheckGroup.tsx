import React, { useContext } from 'react';
import FormLabel from './FormLabel';
import FormGroupContext from './FormGroupContext';

export interface FormCheckGroupProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of form label */
  children?: React.ReactNode;
  /** label attribute */
  label?: React.ReactNode;
  /** Allows for the customization of "required" label. It is helpful for translations. Default: "required" */
  requiredText?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const FormCheckGroup = ({
  children,
  label,
  requiredText,
  className = '',
  ...rest
}: FormCheckGroupProps) => {
  const { isRequiredCon } = useContext(FormGroupContext);

  return (
    <fieldset
      className={`chkbxrdio-grp ${isRequiredCon} ${className}`}
      {...rest}
    >
      <FormLabel as="legend" requiredText={requiredText}>
        {label}
      </FormLabel>
      {children}
    </fieldset>
  );
};

FormCheckGroup.displayName = 'Form.CheckGroup';

export default FormCheckGroup;
