import React from 'react';
import TableRB from 'react-bootstrap/Table';
import '../../style.css';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /** Adds borders on all sides of the table and cells. */
  bordered?: boolean;
  /** The content of the table */
  children?: React.ReactNode;
  /** Enable a hover state on table rows within a <tbody>. */
  hover?: boolean;
  /** Responsive tables allow tables to be scrolled horizontally with ease.
   * Across every breakpoint, use responsive for horizontally scrolling tables.
   * Responsive tables are wrapped automatically in a div. Use responsive="sm",
   * responsive="md", responsive="lg", or responsive="xl" as needed to create
   * responsive tables up to a particular breakpoint. From that breakpoint and
   *  up, the table will behave normally and not scroll horizontally. */
  responsive?: string | boolean;
  /** Adds zebra-striping to any table row within the <tbody>. Makes it easier to read large tables */
  striped?: boolean;
  /** Narrows the height of rows */
  condensed?: boolean;
  /** Set additional classnames for the table */
  className?: string;
}

const Table = ({
  bordered,
  condensed,
  children,
  responsive,
  striped,
  hover,
  className,
  ...rest
}: TableProps) => {
  const condensedClass = condensed === true ? 'table-condensed' : '';
  return (
    <TableRB
      bordered={bordered}
      responsive={responsive}
      striped={striped}
      className={`${className} ${condensedClass}`}
      hover={hover}
      {...rest}
    >
      {children}
    </TableRB>
  );
};

Table.displayName = 'Table';

export default Table;
