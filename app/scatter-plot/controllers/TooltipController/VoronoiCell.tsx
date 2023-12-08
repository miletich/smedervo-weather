'use client';

import { useCurrentDateApi } from '../../context/CurrentDateContext';

import { type VoronoiCellProps } from './utilsServer';

export default function VoronoiCell({ d, datum, center }: VoronoiCellProps) {
  const setCurrentDate = useCurrentDateApi();

  const handleHover = () => {
    setCurrentDate({ datum, center });
  };

  return <path onMouseOver={handleHover} fill="transparent" d={d} />;
}
