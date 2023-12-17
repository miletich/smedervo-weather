import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';
import Numeric from '@/components/Numeric';
import getDataServer from '@/utils/getDataServer';
import { isPrecipitationType } from '@/utils/data';
import { formatShortDate } from '@/utils/date';
import TablePager from '@/components/Table/TablePager';
import { TablePagerConfig } from '@/components/Table/TablePager/utils';

import Moon from './components/Moon';
import { columns, isWindGuard } from './utils/tableDef';
import UvIndex from './components/UvIndex';
import Daylight from './components/Daylight';
import MaxTemp from './components/MaxTemp';
import Wind from './components/Wind';
import Precipitation from './components/Precipitation';
import { RawSearchParams, getTableSearchParams } from './utils/searchParams';
import { sliceData } from './utils/tableFiltering';

export default async function TableView({
  searchParams,
}: {
  searchParams: RawSearchParams;
}) {
  const data = await getDataServer();
  const { offset, limit } = getTableSearchParams(searchParams);
  const pagerConfig: TablePagerConfig = { count: data.length, offset, limit };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(({ name, label }) => (
              <TableHead key={name}>{label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sliceData(data, offset, limit).map((d, i) => (
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
                } else if (name === 'wind' && isWindGuard(value)) {
                  cell = <Wind wind={value} />;
                } else if (value instanceof Date) {
                  cell = formatShortDate(value);
                } else if (typeof value === 'number') {
                  cell = <Numeric>{value.toFixed(2)}</Numeric>;
                } else if (
                  name === 'preciptype' &&
                  isPrecipitationType(value) &&
                  value
                ) {
                  cell = <Precipitation type={value} />;
                } else if (!isWindGuard(value)) {
                  cell = value;
                }

                return <TableCell key={name}>{cell}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePager config={pagerConfig} path="table" />
    </div>
  );
}
