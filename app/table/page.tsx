import { Table, TableHead, TableHeader, TableRow } from '@/components/Table';
import getDataServer from '@/utils/getDataServer';
import { columns } from './utils/tableDef';

export default async function TableView() {
  const data = await getDataServer();

  return (
    <div>
      <Table>
        <TableHeader>
          {columns.map(({ id, label }) => (
            <TableHead key={id}>{label}</TableHead>
          ))}
        </TableHeader>
      </Table>
    </div>
  );
}
