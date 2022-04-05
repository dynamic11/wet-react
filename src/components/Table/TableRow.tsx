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

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  /** The content of the table */
  children?: React.ReactNode;
  /** Invert the colors of the table — with light text on dark backgrounds by setting variant as dark. */
  variant?: variantType;
  /** Set additional classnames for the table */
  className?: string;
}

const TableRow = ({
  children,
  variant = 'default',
  className,
  ...rest
}: TableRowProps) => (
  <tr className={`${className} ${variant}`} {...rest}>
    {children}
  </tr>
);

TableRow.displayName = 'Table.Row';

export default TableRow;
