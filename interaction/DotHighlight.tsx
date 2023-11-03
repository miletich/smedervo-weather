'use client';

import {
  darkGray,
  dotHighlightSize,
  dotHighlightStrokeWidth,
} from '@/utils/consts';
import { useCurrentDateData } from './CurrentDateContext';

export default function DotHighlight() {
  const currentDate = useCurrentDateData();

  return (
    currentDate && (
      <circle
        cx={currentDate.center[0]}
        cy={currentDate.center[1]}
        fill="transparent"
        r={dotHighlightSize}
        stroke={darkGray}
        strokeWidth={dotHighlightStrokeWidth}
      />
    )
  );
}
