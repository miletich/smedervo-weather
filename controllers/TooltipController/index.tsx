'use client';

import { type PropsWithChildren } from 'react';

import Tooltip from '@/controllers/TooltipController/Tooltip';
import {
  CurrentDateContextProvider,
  useCurrentDateApi,
} from '@/context/CurrentDateContext';
import HoverLines from './HoverLines';

export default function MouseLeaveController({ children }: PropsWithChildren) {
  const setCurrentDate = useCurrentDateApi();

  return (
    <CurrentDateContextProvider>
      <g
        onMouseLeave={(e) => {
          console.log('leave');
          setCurrentDate(null);
        }}
      >
        {children}
        <HoverLines />
        <Tooltip />
      </g>
    </CurrentDateContextProvider>
  );
}
