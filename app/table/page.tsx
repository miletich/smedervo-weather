import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';
import getDataServer from '@/utils/getDataServer';
import { columns } from './utils/tableDef';

export default async function TableView() {
  const data = await getDataServer();

  return (
    <div>
      <Table>
        <TableHeader>
          {columns.map(({ name, label }) => (
            <TableHead key={name}>{label}</TableHead>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((d, i) => (
            <TableRow key={d.datetime}>
              {columns.map(({ name, accessor }) => (
                <TableCell key={name}>{accessor(d)?.toString()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
