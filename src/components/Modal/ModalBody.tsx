import ModalBodyRB from 'react-bootstrap/ModalBody';
import React from 'react';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the Body */
  children?: React.ReactNode;
}

const ModalBody = ({ children, ...rest }: ModalBodyProps) => (
  <ModalBodyRB {...rest}>{React.Children.toArray(children)}</ModalBodyRB>
);
ModalBody.displayName = 'Modal.Body';
export default ModalBody;
