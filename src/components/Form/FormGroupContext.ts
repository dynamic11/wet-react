import React from 'react';

interface FormGroupContextInterface {
  isInvalidCon: boolean;
  isRequiredCon: boolean;
}

const FormGroupContext = React.createContext<FormGroupContextInterface>({
  isRequiredCon: false,
  isInvalidCon: false,
});

export default FormGroupContext;
