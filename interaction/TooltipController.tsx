'use client';

import { type PropsWithChildren } from 'react';

import Tooltip from '@/interaction/Tooltip';
import { useCurrentDateApi } from '@/interaction/CurrentDateContext';

export default function MouseLeaveController({ children }: PropsWithChildren) {
  const setCurrentDate = useCurrentDateApi();

  return (
    <g onMouseLeave={() => setCurrentDate(null)}>
      {children}
      <Tooltip />
    </g>
  );
}
