import React from 'react';
import ListGroupRB from 'react-bootstrap/ListGroup';
import '../../style.css';

export interface ListGroupProps {
  /** Change the underlying component CSS base class name and modifier classnames prefix. This is an escape hatch for working with heavily customized bootstrap css. */
  bsPrefix?: string;
  /** Content of the list */
  children?: React.ReactNode;
}

const ListGroup = ({ children, ...rest }: ListGroupProps) => (
  <ListGroupRB {...rest}>{React.Children.toArray(children)}</ListGroupRB>
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
