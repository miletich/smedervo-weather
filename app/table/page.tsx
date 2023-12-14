import { Table, TableHead, TableHeader, TableRow } from '@/components/Table';
import getDataServer from '@/utils/getDataServer';

export default async function TableView() {
  const data = await getDataServer();

  return (
    <div>
      <Table>
        <TableHeader></TableHeader>
      </Table>
    </div>
  );
}
