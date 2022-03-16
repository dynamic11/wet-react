import ModalHeaderRB from 'react-bootstrap/ModalHeader';
import React from 'react';

import '../../style.css';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specify whether the Component should contain a close button */
  closeButton?: boolean;
  /** Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css. */
  bsPrefix?: string;
  /** The content of the header */
  children?: React.ReactNode;
}

const ModalHeader = ({
  children,
  closeButton = true,
  ...rest
}: ModalHeaderProps) => (
  <ModalHeaderRB closeButton={closeButton} closeVariant="white" {...rest}>
    {React.Children.toArray(children)}
  </ModalHeaderRB>
);

ModalHeader.displayName = 'Modal.Header';

export default ModalHeader;
