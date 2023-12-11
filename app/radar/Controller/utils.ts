import { useMemo } from 'react';

import { getAngleForCoordinates } from '../utils/angle';

import { type Coordinates } from './eventHandlers';

type UseTooltipAngle = (coordinates: Coordinates) => number | null;
export const useTooltipAngle: UseTooltipAngle = (coordinates) =>
  useMemo(() => {
    if (!coordinates) return null;

    const [x, y] = coordinates;
    // rotated by a quarter so that it would start at the top
    const rawAngle = getAngleForCoordinates(x, y) + Math.PI / 2;
    // negative angles rotated by full circle to fit the scale
    const angle = rawAngle < 0 ? rawAngle + Math.PI * 2 : rawAngle;

    return angle;
  }, [coordinates]);
