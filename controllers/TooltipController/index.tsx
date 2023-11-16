'use client';

import { type PropsWithChildren } from 'react';

import Tooltip from '@/controllers/TooltipController/Tooltip';
import {
  CurrentDateContextProvider,
  useCurrentDateApi,
} from '@/context/CurrentDateContext';
import HoverLines from './HoverLines';
import MouseLeaveListener from './MouseLeaveListener';

export default function MouseLeaveController({ children }: PropsWithChildren) {
  return (
    <CurrentDateContextProvider>
      <MouseLeaveListener>
        {children}
        <HoverLines />
        <Tooltip />
      </MouseLeaveListener>
    </CurrentDateContextProvider>
  );
}
