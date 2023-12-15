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

import { formatShortDate } from '@/utils/date';
import Moon from './components/Moon';

import { columns } from './utils/tableDef';
import UvIndex from './components/UvIndex';
import Daylight from './components/Daylight';
import MaxTemp from './components/MaxTemp';

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
                const value = accessor(d);
                let cell: JSX.Element | string | undefined;
                if (name === 'moonphase' && value instanceof Date) {
                  cell = <Moon date={value} idx={d.datetime} />;
                } else if (name === 'uvindex' && typeof value === 'number') {
                  cell = <UvIndex uvIndex={value} />;
                } else if (name === 'daylight' && value instanceof Date) {
                  cell = <Daylight date={value} />;
                } else if (name === 'tempmax' && typeof value === 'number') {
                  cell = <MaxTemp temperature={value} />;
                } else if (value instanceof Date) {
                  cell = formatShortDate(value);
                } else if (typeof value === 'number') {
                  cell = <Numeric>{value.toFixed(2)}</Numeric>;
                } else {
                  cell = value;
                }

                return <TableCell key={name}>{cell}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
