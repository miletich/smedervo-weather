import getData from '@/utils/getDataServer';

import { getScales } from '../../utils/scalesServer';

import {
  type HistogramBin,
  genTopHistogram,
  genRightHistogram,
  genHistogramYScale,
  genHistogramArea,
} from './utils';

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
