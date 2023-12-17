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

import { columns } from './utils/tableDef';
import { getCells } from './utils/getCells';
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
            <TableRow key={d.datetime}>{getCells(d)}</TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePager config={pagerConfig} path="table" />
    </div>
  );
}
