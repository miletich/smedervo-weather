import { bin } from 'd3-array';
import type { Bin, HistogramGeneratorNumber } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import type { ScaleLinear } from 'd3-scale';
import { area, curveBasis } from 'd3-shape';

import { Datum, lengthAccessor, tempMaxAccessor } from '@/utils/data';
import { type AnyScale } from '@/utils/genScales';
import { histogramHeight } from '@/utils/consts';

// bins
export type HistogramBin = Bin<Datum, number>;

export type GenHistogram = <T>(
  scale: AnyScale<T>
) => HistogramGeneratorNumber<Datum, number>;

export const genTopHistogram: GenHistogram = (scale) =>
  bin<Datum, number>()
    .domain(scale.domain() as [number, number])
    .value(tempMaxAccessor)
    .thresholds(20);

export const genRightHistogram: GenHistogram = <T>(scale: AnyScale<T>) =>
  bin<Datum, number>()
    .domain(scale.domain() as [number, number])
    .value(tempMaxAccessor)
    .thresholds(20);

// scales
type GenHistogramYScale = <T>(
  bins: HistogramBin[]
) => ScaleLinear<number, number>;

export const genHistogramYScale: GenHistogramYScale = (bins) => {
  const min = Math.min(...bins.map(lengthAccessor));
  const max = Math.max(...bins.map(lengthAccessor));

  return scaleLinear().domain([min, max]).range([histogramHeight, 0]);
};

// area
type GenHistogramArea = (
  bins: HistogramBin[]
) => (scales: Record<'xScale' | 'yScale', AnyScale<number>>) => string;
export const genHistogramArea: GenHistogramArea =
  (bins) =>
  ({ xScale, yScale }) =>
    area<HistogramBin>()
      .x((d) => xScale((d.x0! + d.x1!) / 2))
      .y0(histogramHeight)
      .y1((d) => yScale(d.length))
      .curve(curveBasis)(bins)!;
