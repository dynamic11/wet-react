import React from 'react';
import ListGroupRB from 'react-bootstrap/ListGroup';
import '../../style.css';

/** Types */
type variantType = 'warning' | 'danger' | 'info' | 'success' | undefined;

export interface ListGroupItemProps {
  /** Sets contextual classes for list item */
  variant?: variantType;
  /** Sets a link for the item */
  href?: string;
  /** Sets list item as active */
  active?: boolean;
  /** The content for the item in the list */
  children: React.ReactNode;
}

function goTo(link) {
  window.open(`${link}`);
}

const ListGroupItem = ({
  active = false,
  href = '',
  variant = undefined,
  children,
  ...rest
}: ListGroupItemProps) => (
  <ListGroupRB.Item
    variant={variant}
    active={active}
    href={href}
    onClick={() => goTo(href)}
    {...rest}
  >
    {children}
  </ListGroupRB.Item>
);
ListGroupItem.displayName = 'ListGroup.Item';

export default ListGroupItem;
