import { type Datum } from '@/utils/data';

type SliceData = (data: Datum[], offset: number, limit: number) => Datum[];
export const sliceData: SliceData = (data, offset, limit) =>
  data.slice(offset, offset + limit);
