import OriginTable from './Table';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export type TableProps = typeof OriginTable & {
  Header: typeof TableHeader;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

const Table = OriginTable as TableProps;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
