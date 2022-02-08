import React, { Children } from 'react';
import '../../style.css';
import ListGroup from 'react-bootstrap/ListGroup';

export interface ListGroupWETProps {
  /** Change the underlying component CSS base class name and modifier class
   * names prefix. This is an escape hatch for working with heavily c
   * ustomized bootstrap css. */
  bsPrefix?: string;
  /** Content of the list */
  children: React.ReactNode;
  /** Determines whether the body of the list group is a div or a ul element */
  linksPresent: boolean;
}

const ListGroupWET = ({
  linksPresent = false,
  children,
  ...rest
}: ListGroupWETProps) => {
  let body: React.ReactNode;

  if (linksPresent) {
    body = <div className="list-group"> {children} </div>;
  } else {
    body = <ul className="list-group"> {children} </ul>;
  }

  return <div className="list-group"> {children} </div>;
};

export default ListGroupWET;
