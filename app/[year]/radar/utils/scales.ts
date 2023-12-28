import { type ScaleTime, scaleTime } from 'd3-scale';
import { extent } from 'd3-array';

import { dateAccessor, type Datum } from '@/utils/data';

type GetAngleScale = (data: Datum[]) => ScaleTime<number, number>;
export const getAngleScale: GetAngleScale = (data) =>
  scaleTime()
    .domain(<[Date, Date]>extent(data, dateAccessor))
    .range([0, 2 * Math.PI]);
