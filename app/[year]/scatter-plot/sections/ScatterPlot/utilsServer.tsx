import {
  type Datum,
  dateAccessor,
  tempMaxAccessor,
  tempMinAccessor,
} from '@/utils/data';
import getData from '@/utils/getDataServer';

import { getScales } from '../../utils/scalesServer';

type DotProps = {
  id: string;
  cx: number;
  cy: number;
  fill: string;
};
type GetDopProps = () => Promise<DotProps[]>;
export const getDotProps: GetDopProps = async () => {
  const data = await getData();
  const { xScale, yScale, colorScale } = await getScales();

  return data.map((d) => ({
    id: d.datetime,
    cx: xScale(tempMinAccessor(d)),
    cy: yScale(tempMaxAccessor(d)),
    fill: colorScale(dateAccessor(d)),
  }));
};
