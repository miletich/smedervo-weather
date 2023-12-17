import { TableCell } from '@/components/Table';

import { formatShortDate } from '@/utils/date';
import type { Datum } from '@/utils/data';

import { columns } from './tableDef';
import Moon from '../components/Moon';
import Precipitation from '../components/Precipitation';
import MaxTemp from '../components/MaxTemp';
import Daylight from '../components/Daylight';
import Wind from '../components/Wind';
import UvIndex from '../components/UvIndex';

type GetCells = (d: Datum) => JSX.Element[];
export const getCells: GetCells = (d) => {
  return columns.map((c) => {
    switch (c.name) {
      case 'datetime':
        return <TableCell>{formatShortDate(c.accessor(d))}</TableCell>;
      case 'description':
        return <TableCell>{c.accessor(d)}</TableCell>;
      case 'preciptype':
        return <Precipitation type={c.accessor(d)} />;
      case 'tempmax':
        return <MaxTemp temperature={c.accessor(d)} />;
      case 'daylight':
        return <Daylight date={c.accessor(d)} />;
      case 'moonphase':
        return <Moon date={c.accessor(d)} idx={d.datetime} />;
      case 'wind':
        return <Wind wind={c.accessor(d)} />;
      case 'uvindex':
        return <UvIndex uvIndex={c.accessor(d)} />;
      default:
        return <TableCell />;
    }
  });
};
