import { gradientWidth } from './consts';
import { getData } from './lib';
import { AnyScale, genScales, ScaleTick, type Scales } from './scales';

type GetScales = () => Promise<Scales>;
export const getScales: GetScales = async () => {
  const data = await getData();
  return genScales(data);
};

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

type GetGradientScaleFactor = () => Promise<number>;
export const getGradientScaleFactor: GetGradientScaleFactor = async () => {
  const data = await getData();

  return data.length / gradientWidth;
};
