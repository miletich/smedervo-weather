import { useMemo } from 'react';
import { arc } from 'd3-shape';

import { type Datum, dateAccessor } from '@/utils/data';

import { getAngleForCoordinates } from '../utils/angle';
import { dimensions, tooltipAngleOffset } from '../consts';
import { getAngleScale } from '../utils/scales';

import { type Coordinates } from './eventHandlers';
import { formatDateForCompare } from '@/utils/date';

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
