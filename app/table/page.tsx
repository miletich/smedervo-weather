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
import TablePager from '@/components/Table/TablePager';
import { TablePagerConfig } from '@/components/Table/TablePager/utils';
import { windSpeedAccessor } from '@/utils/data';
import { formatShortDate } from '@/utils/date';

import Moon from './components/Moon';
import Precipitation from './components/Precipitation';
import MaxTemp from './components/MaxTemp';
import Daylight from './components/Daylight';
import Wind from './components/Wind';
import UvIndex from './components/UvIndex';

import { columns } from './utils/tableDef';
import { RawSearchParams, getTableSearchParams } from './utils/searchParams';
import { sliceData } from './utils/tableFiltering';

export default async function TableView({
  searchParams,
}: {
  searchParams: RawSearchParams;
}) {
  const data = await getDataServer();
  const windSpeeds = data.map(windSpeedAccessor);
  const windRange: [number, number] = [
    Math.min(...windSpeeds),
    Math.max(...windSpeeds),
  ];
  const { offset, limit } = getTableSearchParams(searchParams);
  const pagerConfig: TablePagerConfig = { count: data.length, offset, limit };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="odd:!bg-indigo-900">
            {columns.map(({ name, label, className }) => (
              <TableHead key={name} className={className}>
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sliceData(data, offset, limit).map((d) => (
            <TableRow key={d.datetime}>
              {columns.map((c) => {
                switch (c.name) {
                  case 'datetime':
                    return (
                      <TableCell key={c.name} className={c.className}>
                        {formatShortDate(c.accessor(d))}
                      </TableCell>
                    );
                  case 'description':
                    return (
                      <TableCell key={c.name} className={c.className}>
                        {c.accessor(d)}
                      </TableCell>
                    );
                  case 'preciptype':
                    return (
                      <Precipitation
                        key={c.name}
                        type={c.accessor(d)}
                        className={c.className}
                      />
                    );
                  case 'tempmax':
                    return (
                      <MaxTemp
                        key={c.name}
                        temperature={c.accessor(d)}
                        className={c.className}
                      />
                    );
                  case 'daylight':
                    return (
                      <Daylight
                        key={c.name}
                        date={c.accessor(d)}
                        className={c.className}
                      />
                    );
                  case 'moonphase':
                    return (
                      <Moon
                        key={c.name}
                        date={c.accessor(d)}
                        idx={d.datetime}
                        className={c.className}
                      />
                    );
                  case 'wind':
                    return (
                      <Wind
                        key={c.name}
                        className={c.className}
                        wind={c.accessor(d)}
                        windRange={windRange}
                      />
                    );
                  case 'uvindex':
                    return (
                      <UvIndex
                        key={c.name}
                        uvIndex={c.accessor(d)}
                        className={c.className}
                      />
                    );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePager config={pagerConfig} path="table" />
    </div>
  );
}
