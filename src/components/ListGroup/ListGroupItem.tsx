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
  /** Sets list item state as disabled */
  disabled?: boolean;
  /** Marks a ListGroupItem as actionable, applying
   * additional hover, active and disabled styles for links and buttons. */
  action?: boolean;
}

const ListGroupItem = ({
  active = false,
  href = '',
  disabled = false,
  action = false,
  variant = undefined,
  children,
  ...rest
}: ListGroupItemProps) => (
  <ListGroupRB.Item
    variant={variant}
    disabled={disabled}
    action={action}
    active={active}
    href={href}
    {...rest}
  >
    {React.Children.toArray(children)}
  </ListGroupRB.Item>
);
ListGroupItem.displayName = 'ListGroup.Item';

export default ListGroupItem;
