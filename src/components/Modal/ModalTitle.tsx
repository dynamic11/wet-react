import ModalTitleRB from 'react-bootstrap/ModalTitle';
import React from 'react';

import '../../style.css';

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content of the title */
  title?: string;
}

const ModalTitle = ({ title, ...rest }: ModalTitleProps) => (
  <ModalTitleRB {...rest}>{title}</ModalTitleRB>
);

ModalTitle.displayName = 'Modal.Title';

export default ModalTitle;
