'use client';

import { VoronoiCellProps } from '@/utils/lib';
import { useCurrentDateApi } from './CurrentDateContext';

export default function VoronoiCell({ d, datum, center }: VoronoiCellProps) {
  const setCurrentDate = useCurrentDateApi();
  const handleHover = () => {
    setCurrentDate({ datum, center });
  };

  return (
    <path onMouseOver={handleHover} fill="transparent" d={d} stroke="black" />
  );
}
