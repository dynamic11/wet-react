import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import '../../style.css';

export interface SearchableTableProps {
  /** Set of columns of type GridColumns.  */
  columns?: Array<GridColDef>;
  /** Set of rows of type GridRowsProp. */
  rows?: Array<object>;
  /** If true, the grid get a first column with a checkbox that allows to select rows. */
  checkboxSelect?: boolean;
  /** Set additional classnames for the SearchableTable */
  className?: string;
}

const SearchableTable = ({
  checkboxSelect,
  columns = [],
  rows = [],
  className,
  ...rest
}: SearchableTableProps) => (
  <DataGrid
    checkboxSelection={checkboxSelect}
    className={className}
    rows={rows}
    columns={columns}
    {...rest}
  />
);

SearchableTable.displayName = 'SearchableTable';

export default SearchableTable;
