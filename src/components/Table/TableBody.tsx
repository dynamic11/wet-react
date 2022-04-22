import React from 'react';
import '../../style.css';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  /** The content of the table. Each child should be a column title in a <th> tag */
  children?: React.ReactNode;
  /** Set additional classnames for the table */
  className?: string;
}

const TableBody = ({ children, className, ...rest }: TableBodyProps) => (
  <tbody className={className} {...rest}>
    {children}
  </tbody>
);

TableBody.displayName = 'Table.Body';

export default TableBody;
