import React from 'react';
import '../../style.css';
import ListGroup from 'react-bootstrap/ListGroup';

/** Types */
type variantType =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'light'
  | 'info'
  | 'success'
  | 'dark'
  | undefined;

export interface ListGroupItemWETProps {
  /** Sets contextual classes for list item */
  variant?: variantType;
  /** Sets a link for the item */
  link?: string;
  /** Sets list item as active */
  active?: boolean;
  /** The text for the item in the list */
  children: string;
  /**  */
}

const ListGroupItemWET = ({
  active = false,
  link = '',
  variant = 'primary',
  children,
  ...rest
}: ListGroupItemWETProps) => {
  const styles = 'list-group-item';
  const styles2 = active === true ? 'active' : '';
  const styles3 = `list-group-item-${variant}`;
  const finalstyle = `${styles} ${styles2} ${styles3}`;
  let body: React.ReactNode;

  if (link === '') {
    body = <li className={finalstyle}>{children}</li>;
  } else {
    body = (
      <a href={link} className={finalstyle}>
        {' '}
        {children}{' '}
      </a>
    );
  }

  return { body };
};

export default ListGroupItemWET;
