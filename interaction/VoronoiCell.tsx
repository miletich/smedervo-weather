'use client';

import { VoronoiCellProps } from '@/utils/lib';

export default function VoronoiCell({ d, datum, center }: VoronoiCellProps) {
  const handleHover = () => {
    console.log(datum, center);
  };
  return (
    <path onMouseOver={handleHover} fill="transparent" d={d} stroke="black" />
  );
}
