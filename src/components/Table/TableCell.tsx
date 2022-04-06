import React from 'react';
import '../../style.css';

/** Types */
type variantType =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'active'
  | undefined;

export interface TableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  /** The content of the table */
  children?: React.ReactNode;
  /** Invert the colors of the table — with light text on dark backgrounds by setting variant as dark. */
  variant?: variantType;
  /** Set additional classnames for the table */
  className?: string;
}

const TableCell = ({
  children,
  variant = 'default',
  className,
  ...rest
}: TableCellProps) => (
  <td className={`${className} ${variant}`} {...rest}>
    {children}
  </td>
);

TableCell.displayName = 'Table.Cell';

export default TableCell;
