import path from 'path';
import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import {
  Datum,
  dataSchema,
  dateAccessor,
  lengthAccessor,
  tempMaxAccessor,
  tempMinAccessor,
} from './data';
import { getScales } from './scales';
import { dimensions, histogramHeight, numOfGradientStops } from './consts';

type GetData = () => Promise<Datum[]>;
export const getData: GetData = async () => {
  const csv = (
    await readFile(path.join('./public', 'sd-weather-2020.csv'))
  ).toString();
  const raw = await d3.csvParse(csv);

  return dataSchema.parse(raw);
};

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

export type VoronoiCellProps = {
  d: string;
  datum: Datum;
  center: [number, number];
};
type GetVoronoiCellProps = () => Promise<VoronoiCellProps[]>;
export const getVoronoiCellProps: GetVoronoiCellProps = async () => {
  const data = await getData();
  const { xScale, yScale } = await getScales();

  const delaunay = d3.Delaunay.from(
    data,
    (d) => xScale(tempMinAccessor(d)),
    (d) => yScale(tempMaxAccessor(d))
  );

  const voronoi = delaunay.voronoi();
  voronoi.xmax = dimensions.innerWidth;
  voronoi.ymax = dimensions.innerHeight;

  return data.map((datum, i) => ({
    d: voronoi.renderCell(i),
    datum,
    center: [xScale(tempMinAccessor(datum)), yScale(tempMaxAccessor(datum))],
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

export const getTopHistogramArea: GetHistogramArea = async () => {
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

export const getRightHistogramArea: GetHistogramArea = async () => {
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
