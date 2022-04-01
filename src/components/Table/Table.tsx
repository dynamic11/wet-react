import React from 'react';
import TableRB from 'react-bootstrap/Table';
import '../../style.css';

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds borders on all sides of the table and cells. */
  bordered?: boolean;
  /** The content of the table */
  children?: React.ReactNode;
  /** Removes all borders on the table and cells, including table header. */
  borderless?: boolean;
  /** Enable a hover state on table rows within a <tbody>. */
  hover?: boolean;
  /** Responsive tables allow tables to be scrolled horizontally with ease.
   * Across every breakpoint, use responsive for horizontally scrolling tables.
   * Responsive tables are wrapped automatically in a div. Use responsive="sm",
   * responsive="md", responsive="lg", or responsive="xl" as needed to create
   * responsive tables up to a particular breakpoint. From that breakpoint and
   *  up, the table will behave normally and not scroll horizontally. */
  responsive?: string | boolean;
  /** Make tables more compact by cutting cell padding in half by setting size as sm. */
  size?: string;
  /** Adds zebra-striping to any table row within the <tbody>. */
  striped?: boolean;
  /** Narrows the height of rows */
  condensed?: boolean;
  /** Invert the colors of the table — with light text on dark backgrounds by setting variant as dark. */
  variant?: string;
  /** Set additional classnames for the table */
  className?: string;
}

const Table = ({
  bordered,
  borderless,
  condensed,
  children,
  responsive,
  size,
  striped,
  variant,
  hover,
  className,
  ...rest
}: TableProps) => {
  const condensedClass = condensed === true ? 'table-condensed' : '';
  return (
    <TableRB
      bordered={bordered}
      borderless={borderless}
      responsive={responsive}
      size={size}
      striped={striped}
      variant={variant}
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
