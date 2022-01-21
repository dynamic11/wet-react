import React from 'react';
import TabRB from 'react-bootstrap/Tab';
import '../../style.css';

export interface TabProps {
  children?: React.ReactNode;
  /** Additional custom classNames */
  className?: string;
  /** Title of Tab */
  title: string;
  /** A unique identifier for the Component, the eventKey makes it distinguishable from others in a set. Similar to React's key prop, in that it only needs to be unique amongst the Components siblings, not globally. */
  eventKey: string;
}

const TabN = ({
  className = '',
  children,
  title,
  eventKey,
  ...rest
}: TabProps) => (
  <TabRB
    title={title}
    eventKey={eventKey}
    className={`Tab ${className}`}
    {...rest}
  >
    Ya
    {children}
  </TabRB>
);

TabN.displayName = 'Tab';

export default TabN;
