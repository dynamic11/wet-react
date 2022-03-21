import ModalFooterRB from 'react-bootstrap/ModalFooter';

import React from 'react';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the Footer */
  children?: React.ReactNode;
}

const ModalFooter = ({ children, ...rest }: ModalFooterProps) => (
  <ModalFooterRB {...rest}>{React.Children.toArray(children)}</ModalFooterRB>
);
ModalFooter.displayName = 'Modal.Footer';
export default ModalFooter;
