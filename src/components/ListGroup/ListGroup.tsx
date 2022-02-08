import React from 'react';
import ListGroupRB from 'react-bootstrap/ListGroup';
import '../../style.css';

export interface ListGroupProps {
  /** Change the underlying component CSS base class name and modifier classnames prefix. This is an escape hatch for working with heavily customized bootstrap css. */
  bsPrefix?: string;
  /** Determines whether the body of the list group is a div or a ul element */
  linksPresent: boolean;
  /** Content of the list */
  children?: React.ReactNode;
}

const ListGroup = ({
  linksPresent = false,
  children,
  ...rest
}: ListGroupProps) => {
  let body: React.ReactNode;

  if (linksPresent) {
    body = <div className="list-group"> {children} </div>;
  } else {
    body = <ul className="list-group"> {children} </ul>;
  }

  return <ListGroupRB {...rest}>{children}</ListGroupRB>;
};

ListGroup.displayName = 'ListGroup';

export default ListGroup;
