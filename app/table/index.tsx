import { createTable, getCoreRowModel } from '@tanstack/table-core';

import getDataServer from '@/utils/getDataServer';

import { columns, getCoreOptions } from './utils/tableDef';

export default async function Table() {
  const data = await getDataServer();

  const table = createTable(getCoreOptions(data));

  return <div></div>;
}
