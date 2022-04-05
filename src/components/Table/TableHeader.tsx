import React from 'react';
import '../../style.css';

/** Types */
type variantType = 'success' | 'warning' | 'danger' | 'active' | undefined;

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** The content of the table. Each child should be a column title in a <th> tag */
  children?: React.ReactNode;
  /** Invert the colors of the table — with light text on dark backgrounds by setting variant as dark. */
  variant?: variantType;
  /** Set additional classnames for the table */
  className?: string;
}

const TableHeader = ({
  children,
  variant,
  className,
  ...rest
}: TableHeaderProps) => (
  <thead className={`${className} ${variant}`} {...rest}>
    {children}
  </thead>
);

TableHeader.displayName = 'Table.Header';

export default TableHeader;
