import React from 'react';
import ListGroupRB from 'react-bootstrap/ListGroup';
import '../../style.css';

export interface ListGroupProps {
  /** Content of the list */
  children?: React.ReactNode;
  /** Generate numbered list items. */
  numbered?: boolean;
  /** Additional calss names */
  className?: string;
}

const ListGroup = ({
  children,
  numbered,
  className = '',
  ...rest
}: ListGroupProps) => (
  <ListGroupRB numbered={numbered} className={className} {...rest}>
    {children}
  </ListGroupRB>
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
