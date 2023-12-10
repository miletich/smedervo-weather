import * as d3 from 'd3';

import {
  type Datum,
  dateAccessor,
  tempMinAccessor,
  tempMaxAccessor,
} from '@/utils/data';
import getDataServer from '@/utils/getDataServer';

import { getScales } from '../../utils/scalesServer';

type GetTemperatureArea = () => Promise<string>;
export const getTemperatureArea: GetTemperatureArea = async () => {
  const data = await getDataServer();
  const { angleScale, radiusScale } = await getScales();

  const genTemperatureArea = d3
    .areaRadial<Datum>()
    .angle((d) => angleScale(dateAccessor(d)))
    .innerRadius((d) => radiusScale(tempMinAccessor(d)))
    .outerRadius((d) => radiusScale(tempMaxAccessor(d)));

  return genTemperatureArea(data)!;
};
