import ModalBodyRB from 'react-bootstrap/ModalBody';
import React from 'react';

import '../../style.css';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the Body */
  children?: React.ReactNode;
}

const ModalBody = ({ children, ...rest }: ModalBodyProps) => (
  <ModalBodyRB {...rest}>{children}</ModalBodyRB>
);
ModalBody.displayName = 'Modal.Body';
export default ModalBody;
