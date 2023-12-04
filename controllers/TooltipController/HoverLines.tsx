'use client';

import { useCurrentDateData } from '@/context/CurrentDateContext';
import { dimensions, hoverLineThickness } from '@/utils/consts';

import HoverLine from './HoverLine';

export default function HoverLines() {
  const currentDate = useCurrentDateData();

  if (!currentDate) return null;

  const { center } = currentDate;

  return (
    <g>
      <HoverLine
        x={center[0]}
        y={center[1] - hoverLineThickness / 2}
        width={dimensions.innerWidth + dimensions.margin.right - center[0]}
        height={hoverLineThickness}
      />
      <HoverLine
        x={center[0] - hoverLineThickness / 2}
        y={-dimensions.margin.top}
        width={hoverLineThickness}
        height={dimensions.margin.top + center[1]}
      />
    </g>
  );
}
