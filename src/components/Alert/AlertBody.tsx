import React from 'react';

export interface AlertBodyProps {
  /** Content of alert body */
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
}

const AlertBody = ({ children, className = '', ...rest }: AlertBodyProps) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

AlertBody.displayName = 'Alert.Body';

export default AlertBody;
