import { AnyScale } from '../../utils/genScales';

export type ScaleTick = {
  position: number;
  label: string;
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
