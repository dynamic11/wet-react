import React from 'react';
import ListGroupRB from 'react-bootstrap/ListGroup';
import '../../style.css';

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

export interface ListGroupItemProps {
  /** Sets contextual classes for list item */
  variant?: variantType;
  /** Sets a link for the item */
  href?: string;
  /** Sets list item as active */
  active?: boolean;
  /** The text for the item in the list */
  children: React.ReactNode;
  /**  */
}

const ListGroupItem = ({
  active = false,
  href,
  variant = 'primary',
  children,
  ...rest
}: ListGroupItemProps) => (
  // const styles = 'list-group-item';
  // const styles2 = active === true ? 'active' : '';
  // const styles3 = `list-group-item-${variant}`;
  // const finalstyle = `${styles} ${styles2} ${styles3}`;
  // let body: React.ReactNode;

  // if (href) {
  //   body = <li className={finalstyle}>{children}</li>;
  // } else {
  //   body = (
  //     <a href={href} className={finalstyle}>
  //       {children}
  //     </a>
  //   );
  // }

  <ListGroupRB.Item>{children}</ListGroupRB.Item>
);
ListGroupItem.displayName = 'ListGroup.Item';

export default ListGroupItem;
