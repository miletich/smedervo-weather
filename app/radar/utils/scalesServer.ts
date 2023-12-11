import * as d3 from 'd3';

import getDataServer from '@/utils/getDataServer';
import { dateAccessor, tempMaxAccessor, tempMinAccessor } from '@/utils/data';

import { dimensions } from '../consts';
import { getAngleScale } from './scales';

type GetScales = () => Promise<{
  angleScale: d3.ScaleTime<number, number>;
  radiusScale: d3.ScaleLinear<number, number>;
}>;
export const getScales: GetScales = async () => {
  const data = await getDataServer();

  const angleScale = getAngleScale(data);

  const radiusScale = d3
    .scaleLinear()
    .domain(
      <[number, number]>(
        d3.extent([...data.map(tempMinAccessor), ...data.map(tempMaxAccessor)])
      )
    )
    .range([0, dimensions.radius])
    .nice();

  return { angleScale, radiusScale };
};
