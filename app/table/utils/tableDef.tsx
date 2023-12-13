import { Datum } from '@/utils/data';
import { createColumnHelper } from '@tanstack/table-core';

export const columnHelper = createColumnHelper<Datum>();
