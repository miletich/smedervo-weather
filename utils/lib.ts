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
import type { AnyScale } from './scales';
import { getScales } from './scalesLib';
import { dimensions, histogramHeight, numOfGradientStops } from './consts';
import {
  HistogramBin,
  genHistogramArea,
  genHistogramYScale,
  genRightHistogram,
  genTopHistogram,
} from './histograms';

type GetData = () => Promise<Datum[]>;
export const getData: GetData = async () => {
  const csv = (
    await readFile(path.join('./public', 'sd-weather-2020.csv'))
  ).toString();
  const raw = await d3.csvParse(csv);

  return dataSchema.parse(raw);
};

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
type GetHistogramBins = () => Promise<HistogramBin[]>;
export const getTopHistogramBins: GetHistogramBins = async () => {
  const data = await getData();
  const { xScale } = await getScales();
  const histogram = genTopHistogram(xScale)(data);

  return histogram;
};

export const getRightHistogramBins: GetHistogramBins = async () => {
  const data = await getData();
  const { yScale } = await getScales();
  const histogram = genRightHistogram(yScale)(data);

  return histogram;
};

type GetHistogramScales = () => Promise<{
  topHistogramYScale: d3.ScaleLinear<number, number>;
  rightHistogramYScale: d3.ScaleLinear<number, number>;
}>;
export const getHistogramScales: GetHistogramScales = async () => {
  const rightHistogramBins = await getRightHistogramBins();
  const topHistogramBins = await getTopHistogramBins();

  const topHistogramYScale = genHistogramYScale(topHistogramBins);
  const rightHistogramYScale = genHistogramYScale(rightHistogramBins);

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

  return genHistogramArea(bins)({ xScale, yScale: topHistogramYScale });
};

export const getRightHistogramArea: GetHistogramArea = async () => {
  const bins = await getRightHistogramBins();
  const { yScale } = await getScales();
  const { rightHistogramYScale } = await getHistogramScales();

  return genHistogramArea(bins)({
    xScale: yScale,
    yScale: rightHistogramYScale,
  });
};
