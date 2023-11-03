import * as d3 from 'd3';

import {
  Datum,
  dateAccessor,
  getData,
  lengthAccessor,
  tempMaxAccessor,
  tempMinAccessor,
} from './data';
import { getScales } from './scales';
import { histogramHeight, numOfGradientStops } from './consts';

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

type HistogramBin = d3.Bin<Datum, number>;
type GetHistogramBins = () => Promise<HistogramBin[]>;

export const getTopHistogramBins: GetHistogramBins = async () => {
  const data = await getData();
  const histogram = await genTopHistogram();

  return histogram(data);
};

export const getRightHistogramBins: GetHistogramBins = async () => {
  const data = await getData();
  const histogram = await genRightHistogram();

  return histogram(data);
};

type GetHistogramScales = () => Promise<{
  topHistogramYScale: d3.ScaleLinear<number, number>;
  rightHistogramYScale: d3.ScaleLinear<number, number>;
}>;
export const getHistogramScales: GetHistogramScales = async () => {
  const rightHistogramBins = await getRightHistogramBins();
  const topHistogramBins = await getTopHistogramBins();

  const topHistogramYScale = d3
    .scaleLinear()
    .domain(d3.extent(topHistogramBins, lengthAccessor) as [number, number])
    .range([histogramHeight, 0]);
  const rightHistogramYScale = d3
    .scaleLinear()
    .domain(d3.extent(rightHistogramBins, lengthAccessor) as [number, number])
    .range([histogramHeight, 0]);

  return {
    topHistogramYScale,
    rightHistogramYScale,
  };
};

type GetHistogramArea = () => Promise<string>;

const getTopHistogramArea: GetHistogramArea = async () => {
  const bins = await getTopHistogramBins();
  const { xScale } = await getScales();
  const { topHistogramYScale } = await getHistogramScales();

  const genArea = d3
    .area<HistogramBin>()
    .x((d) => xScale(d.x0! + d.x1!) / 2)
    .y0(histogramHeight)
    .y1((d) => topHistogramYScale(d.length))
    .curve(d3.curveBasis);

  return genArea(bins)!;
};

const getRightHistogramArea: GetHistogramArea = async () => {
  const bins = await getRightHistogramBins();
  const { yScale } = await getScales();
  const { rightHistogramYScale } = await getHistogramScales();

  const genArea = d3
    .area<HistogramBin>()
    .x((d) => yScale((d.x0! + d.x1!) / 2))
    .y0(histogramHeight)
    .y1((d) => rightHistogramYScale(d.length))
    .curve(d3.curveBasis);

  return genArea(bins)!;
};
