'use client';

import { type PropsWithChildren } from 'react';

import Tooltip from '@/interaction/Tooltip';
import { useCurrentDateApi } from '@/interaction/CurrentDateContext';
import HoverLines from './HoverLines';

export default function MouseLeaveController({ children }: PropsWithChildren) {
  const setCurrentDate = useCurrentDateApi();

  return (
    <g onMouseLeave={() => setCurrentDate(null)}>
      {children}
      <HoverLines />
      <Tooltip />
    </g>
  );
}
