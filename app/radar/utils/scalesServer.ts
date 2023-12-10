import * as d3 from 'd3';

import getDataServer from '@/utils/getDataServer';
import { dateAccessor, tempMaxAccessor, tempMinAccessor } from '@/utils/data';

import { dimensions } from '../consts';

type GetScales = () => Promise<{
  angleScale: d3.ScaleTime<number, number>;
  radiusScale: d3.ScaleLinear<number, number>;
}>;
const getScales: GetScales = async () => {
  const data = await getDataServer();

  const angleScale = d3
    .scaleTime()
    .domain(<[Date, Date]>d3.extent(data, dateAccessor))
    .range([0, 2 * Math.PI]);

  const radiusScale = d3
    .scaleLinear()
    .domain(
      <[number, number]>(
        d3.extent([...data.map(tempMinAccessor), ...data.map(tempMaxAccessor)])
      )
    )
    .range([0, dimensions.radius]);

  return { angleScale, radiusScale };
};
