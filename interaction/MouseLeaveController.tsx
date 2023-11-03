'use client';

import { type PropsWithChildren } from 'react';
import { useCurrentDateApi } from './CurrentDateContext';

export default function MouseLeaveController({ children }: PropsWithChildren) {
  const setCurrentDate = useCurrentDateApi();

  return <g onMouseLeave={() => setCurrentDate(null)}>{children}</g>;
}
