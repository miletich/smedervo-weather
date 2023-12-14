import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';
import getDataServer from '@/utils/getDataServer';
import Numeric from '@/components/Numeric';

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
              {columns.map(({ name, accessor }) => {
                const rawValue = accessor(d);
                const value =
                  typeof rawValue === 'number' ? (
                    <Numeric>{rawValue.toFixed(2)}</Numeric>
                  ) : rawValue instanceof Date ? (
                    rawValue.toString()
                  ) : (
                    rawValue
                  );

                return <TableCell key={name}>{value}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
