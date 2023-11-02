import * as d3 from 'd3';
import {
  dateAccessor,
  getData,
  tempMaxAccessor,
  tempMinAccessor,
} from './data';
import { dimensions } from './consts';

type Scales = {
  xScale: d3.ScaleLinear<number, number>;
  yScale: d3.ScaleLinear<number, number>;
  colorScale: d3.ScaleSequential<string, string>;
};
type GetScales = () => Promise<Scales>;
export const getScales: GetScales = async () => {
  const data = await getData();
  const temperatureExtent = [
    Math.min(...data.map(tempMinAccessor)),
    Math.max(...data.map(tempMaxAccessor)),
  ];
  const dateExtent = [
    dateAccessor(data[0]),
    dateAccessor(data[data.length - 1]),
  ];

  const xScale = d3
    .scaleLinear()
    .domain(temperatureExtent)
    .range([0, dimensions.innerWidth])
    .nice();
  const yScale = d3
    .scaleLinear()
    .domain(temperatureExtent)
    .range([dimensions.innerHeight, 0])
    .nice();
  const colorScale = d3
    .scaleSequential<Date>()
    .domain(dateExtent)
    // inverted to make dates in spring/autumn appear green/orange
    .interpolator((d) => d3.interpolateRainbow(-d));

  return { xScale, yScale, colorScale };
};

export type ScaleTick = {
  position: number;
  label: string;
};
interface AnyScale<T> {
  (value: T): number;
  ticks: (count: number | undefined) => T[];
}
type GetScaleTicksParams<T> = {
  scale: AnyScale<T>;
  formatLabel?: (x: T) => string;
  tickCount?: number;
};

type GetScaleTicks = <T>(params: GetScaleTicksParams<T>) => ScaleTick[];
export const getScaleTicks: GetScaleTicks = ({
  scale,
  formatLabel = (x) => String(x),
  tickCount,
}) =>
  scale.ticks(tickCount).map((d) => ({
    position: scale(d),
    label: formatLabel(d),
  }));