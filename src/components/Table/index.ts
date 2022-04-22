import OriginTable from './Table';
import TableCell from './TableCell';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableBody from './TableBody';

export type TableProps = typeof OriginTable & {
  Header: typeof TableHeader;
  Row: typeof TableRow;
  Cell: typeof TableCell;
  Body: typeof TableBody;
};

const Table = OriginTable as TableProps;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Body = TableBody;

export default Table;
