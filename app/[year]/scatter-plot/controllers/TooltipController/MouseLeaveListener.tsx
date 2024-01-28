'use client';

import { type PropsWithChildren } from 'react';

import { useCurrentDateApi } from '../../context/CurrentDateContext';

export default function MouseLeaveListener({ children }: PropsWithChildren) {
  const setCurrentDate = useCurrentDateApi();

  return <g onMouseLeave={() => setCurrentDate(null)}>{children}</g>;
}
