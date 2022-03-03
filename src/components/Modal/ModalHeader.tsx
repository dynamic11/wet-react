import ModalHeaderRB from 'react-bootstrap/ModalHeader';
import React from 'react';

import '../../style.css';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specify whether the Component should contain a close button */
  closeButton?: boolean;
  /** Provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable. */
  closeLabel?: string;
  /** Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css. */
  bsPrefix?: string;
}

const ModalHeader = ({
  children,
  closeButton = false,
  closeLabel = 'close',
  ...rest
}: ModalHeaderProps) => (
  <ModalHeaderRB closeButton={closeButton} closeLabel={closeLabel} {...rest}>
    {children}
  </ModalHeaderRB>
);

ModalHeader.displayName = 'Modal.Header';

export default ModalHeader;
