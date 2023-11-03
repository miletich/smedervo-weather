import * as d3 from 'd3';

import {
  dateAccessor,
  getData,
  tempMaxAccessor,
  tempMinAccessor,
} from './data';
import { getScales } from './scales';
import { numOfGradientStops } from './consts';

type DotProps = {
  cx: number;
  cy: number;
  fill: string;
};
type GetDopProps = () => Promise<DotProps[]>;
export const getDotProps: GetDopProps = async () => {
  const data = await getData();
  const { xScale, yScale, colorScale } = await getScales();

  return data.map((d) => ({
    cx: xScale(tempMinAccessor(d)),
    cy: yScale(tempMaxAccessor(d)),
    fill: colorScale(dateAccessor(d)),
  }));
};

export const parseDate = d3.timeParse('%Y-%m-%d');
