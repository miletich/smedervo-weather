import {
  type CoreOptions,
  createColumnHelper,
  getCoreRowModel,
} from '@tanstack/table-core';

import type { Datum } from '@/utils/data';

export const columnHelper = createColumnHelper<Datum>();

export const columns = [
  columnHelper.accessor('datetime', {
    header: () => 'Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('tempmin', {
    header: () => 'Min Temp',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: () => 'Description',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('tempmax', {
    header: () => 'Max Temp',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sunrise', {
    header: () => 'Sunrise',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sunset', {
    header: () => 'Sunset',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('uvindex', {
    header: () => 'UV Index',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('preciptype', {
    header: () => 'Precipitation',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('windspeed', {
    header: () => 'Wind Speed',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('winddir', {
    header: () => 'Wind Direction',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('moonphase', {
    header: () => 'Moon Phase',
    cell: (info) => info.getValue(),
  }),
];

type GetCoreOptions = (data: Datum[]) => CoreOptions<Datum>;
export const getCoreOptions: GetCoreOptions = (data) => ({
  get data() {
    return data;
  },
  columns,
  onStateChange: () => {},
  getCoreRowModel: getCoreRowModel(),
  renderFallbackValue: null,
  state: {},
});
