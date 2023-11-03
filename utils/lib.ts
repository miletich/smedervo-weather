import * as d3 from 'd3';

import {
  Datum,
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

// histograms
type GenHistogram = () => Promise<d3.HistogramGeneratorNumber<Datum, number>>;

export const genTopHistogram: GenHistogram = async () => {
  const { xScale } = await getScales();

  return d3
    .bin<Datum, number>()
    .domain(xScale.domain() as [number, number])
    .value(tempMaxAccessor)
    .thresholds(20);
};

export const genRightHistogram: GenHistogram = async () => {
  const { yScale } = await getScales();

  return d3
    .bin<Datum, number>()
    .domain(yScale.domain() as [number, number])
    .value(tempMaxAccessor)
    .thresholds(20);
};
