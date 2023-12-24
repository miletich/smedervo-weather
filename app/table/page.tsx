import * as stylex from '@stylexjs/stylex';

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
import { tableStyles } from '@/components/Table/styles';
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
import Textual from './components/Textual';
import { tableComponentStyles } from './components/tableComponentStyles';

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
  console.log(data);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow styleX={tableStyles.headerRow}>
            {columns.map((c) => (
              <TableHead
                key={c.name}
                styleX={'startAlign' in c && tableComponentStyles.startAlign}
              >
                {c.label}
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
                      <Textual
                        key={c.name}
                        styleX={tableComponentStyles.dateWidth}
                      >
                        {formatShortDate(c.accessor(d))}
                      </Textual>
                    );
                  case 'description':
                    return (
                      <Textual
                        key={c.name}
                        styleX={tableComponentStyles.descriptionWidth}
                      >
                        {c.accessor(d)}
                      </Textual>
                    );
                  case 'preciptype':
                    return <Precipitation key={c.name} type={c.accessor(d)} />;
                  case 'tempmax':
                    return <MaxTemp key={c.name} temperature={c.accessor(d)} />;
                  case 'daylight':
                    return <Daylight key={c.name} date={c.accessor(d)} />;
                  case 'moonphase':
                    return (
                      <Moon
                        key={c.name}
                        date={c.accessor(d)}
                        idx={d.datetime}
                      />
                    );
                  case 'wind':
                    return (
                      <Wind
                        key={c.name}
                        wind={c.accessor(d)}
                        windRange={windRange}
                      />
                    );
                  case 'uvindex':
                    return <UvIndex key={c.name} uvIndex={c.accessor(d)} />;
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
