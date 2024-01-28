import * as d3 from 'd3';

import { getScales } from '../../utils/scalesServer';
import { getCoordinatesForAngle } from '../../utils/angle';
import { monthTickLabelOffset } from '../../consts';
import { formatShortMonthName } from '@/utils/date';

export type MonthTickProps = {
  label: string;
  x2: number;
  y2: number;
  labelX: number;
  labelY: number;
};
export type GetMonthTicksProps = () => Promise<MonthTickProps[]>;
export const getMonthTicksProps: GetMonthTicksProps = async () => {
  const { angleScale } = await getScales();
  const months = d3.timeMonth.range(
    angleScale.domain()[0],
    d3.timeDay.offset(angleScale.domain()[1], 1)
  );

  return months.map((m) => {
    const angle = angleScale(m);
    const [x2, y2] = getCoordinatesForAngle(angle);
    const [labelX, labelY] = getCoordinatesForAngle(
      angle,
      monthTickLabelOffset
    );

    return {
      x2,
      y2,
      label: formatShortMonthName(m),
      labelX,
      labelY,
    };
  });
};

type GetHasFreezing = () => Promise<boolean>;
const getHasFreezing: GetHasFreezing = async () => {
  const { radiusScale } = await getScales();

  return radiusScale.domain()[0] < 0;
};

export type TemperatureTickProps = {
  label: string;
  r: number;
};
export type GetTemperatureTickProps = () => Promise<TemperatureTickProps[]>;
export const getTemperatureTickProps: GetTemperatureTickProps = async () => {
  const { radiusScale } = await getScales();
  const ticks = radiusScale.ticks(4);

  return ticks.map((t) => ({
    label: String(t),
    r: radiusScale(t),
  }));
};
