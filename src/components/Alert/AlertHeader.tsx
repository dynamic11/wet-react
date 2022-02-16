import React from 'react';
import Title from '@components/Title';

type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface AlertHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of alert heading */
  children?: React.ReactNode;
  /** Header Level */
  level?: levelType;
  /** Additional custom classNames */
  className?: string;
}

const AlertHeader = ({
  level = 'h2',
  className = '',
  children,
}: AlertHeaderProps) => (
  <Title level={level} className={className}>
    {children}
  </Title>
);

AlertHeader.displayName = 'Alert.Header';

export default AlertHeader;
