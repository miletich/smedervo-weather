import { useMemo } from 'react';
import { arc } from 'd3-shape';
import { scaleSequential } from 'd3-scale';

import {
  type Datum,
  dateAccessor,
  tempMinAccessor,
  tempMaxAccessor,
  precipitationTypeAccessor,
} from '@/utils/data';

import { getAngleForCoordinates, getCoordinatesForAngle } from '../utils/angle';
import { dimensions, tooltipAngleOffset, tooltipOffset } from '../consts';
import { getAngleScale } from '../utils/scales';
import { gradientScale } from '../sections/Meta/TemperatureGradient';

import { type Coordinates } from './eventHandlers';
import { formatDateForCompare } from '@/utils/date';
import { extent } from 'd3';
import { precipitationTypeScale } from '../sections/Precipitation/utils';

type UseTooltipAngle = (coordinates: Exclude<Coordinates, null>) => number;
export const useTooltipAngle: UseTooltipAngle = (coordinates) =>
  useMemo(() => {
    const [x, y] = coordinates;
    // rotated by a quarter so that it would start at the top
    const rawAngle = getAngleForCoordinates(x, y) + Math.PI / 2;
    // negative angles rotated by full circle to fit the scale
    const angle = rawAngle < 0 ? rawAngle + Math.PI * 2 : rawAngle;

    return angle;
  }, [coordinates]);

type GenerateTooltipArc = (angle: number) => string;
export const generateTooltipArc: GenerateTooltipArc = (angle) =>
  arc<null>()
    .startAngle(angle - tooltipAngleOffset)
    .endAngle(angle + tooltipAngleOffset)
    .innerRadius(0)
    .outerRadius(dimensions.size / 2)(null)!;

type UseCurrentDatum = (angle: number, data: Datum[]) => Datum;
export const useCurrentDatum: UseCurrentDatum = (angle, data) =>
  useMemo(() => {
    const angleScale = getAngleScale(data);
    const date = angleScale.invert(angle);

    return data.find(
      (d) =>
        formatDateForCompare(dateAccessor(d)) === formatDateForCompare(date)
    )!;
  }, [data, angle]);

type FormatNumber = (n: number, decimals?: number) => string;
export const formatNumber: FormatNumber = (n, decimals = 2) =>
  n.toFixed(decimals);

type UseTempColors = (datum: Datum, data: Datum[]) => [string, string];
export const useTempColors: UseTempColors = (datum, data) =>
  useMemo(() => {
    const scale = scaleSequential()
      .domain(
        extent([
          ...data.map(tempMinAccessor),
          ...data.map(tempMaxAccessor),
        ]) as [number, number]
      )
      .interpolator(gradientScale);

    return [scale(tempMinAccessor(datum)), scale(tempMaxAccessor(datum))];
  }, [datum, data]);

type UsePrecipitationColor = (datum: Datum) => string | undefined;
export const usePrecipitationColor: UsePrecipitationColor = (datum) =>
  useMemo(() => {
    const type = precipitationTypeAccessor(datum);

    if (!type) return;

    return precipitationTypeScale(type);
  }, [datum]);

type UseTooltipTranslate = (angle: number) => string;
export const useTooltipTranslate: UseTooltipTranslate = (angle) =>
  useMemo(() => {
    const [x, y] = getCoordinatesForAngle(angle, tooltipOffset);
    // if not near the centre, place near edges, otherwise centre to middle
    const xAdjust = x < -50 ? '5rem - 100%' : x > 50 ? '-5rem + 0%' : '-50%';
    const xPosition = x + dimensions.margin + 'px';
    const yAdjust = y < -50 ? '5rem - 100%' : y > 50 ? '-5rem + 0%' : '-50%';
    const yPosition = y + dimensions.size / 2 - 30 + 'px';

    return `translate(calc(${xAdjust} + ${xPosition}),calc(${yAdjust} + ${yPosition}))`;
  }, [angle]);
