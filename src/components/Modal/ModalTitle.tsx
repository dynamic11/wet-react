import ModalTitleRB from 'react-bootstrap/ModalTitle';
import React from 'react';

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the title */
  children?: React.ReactNode;
}

const ModalTitle = ({ children, ...rest }: ModalTitleProps) => (
  <ModalTitleRB {...rest}>{React.Children.toArray(children)}</ModalTitleRB>
);

ModalTitle.displayName = 'Modal.Title';

export default ModalTitle;
