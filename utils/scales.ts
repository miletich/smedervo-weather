import { scaleLinear, scaleSequential } from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';
import { Datum, dateAccessor, tempMaxAccessor, tempMinAccessor } from './data';
import { dimensions, gradientWidth } from './consts';

export type Scales = {
  xScale: d3.ScaleLinear<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  colorScale: d3.ScaleSequential<string, string>;
  gradientScale: d3.ScaleLinear<number, number>;
};

export interface AnyScale<T> {
  (value: T): number;
  domain: () => number[];
  ticks: (count: number | undefined) => T[];
}

type GenScales = (data: Datum[]) => Scales;
export const genScales: GenScales = (data) => {
  const temperatureExtent = [
    Math.min(...data.map(tempMinAccessor)),
    Math.max(...data.map(tempMaxAccessor)),
  ];
  const dateExtent = [
    dateAccessor(data[0]),
    dateAccessor(data[data.length - 1]),
  ];

  const xScale = scaleLinear()
    .domain(temperatureExtent)
    .range([0, dimensions.innerWidth])
    .nice();
  const yScale = scaleLinear()
    .domain(temperatureExtent)
    .range([dimensions.innerHeight, 0])
    .nice();
  const colorScale = scaleSequential<Date>()
    .domain(dateExtent)
    // inverted to make dates in spring/autumn appear green/orange
    .interpolator((d) => interpolateRainbow(-d));
  const gradientScale = scaleLinear()
    .domain(colorScale.domain())
    .range([0, gradientWidth]);

  return { xScale, yScale, colorScale, gradientScale };
};
