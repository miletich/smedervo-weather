'use client';

import { type PropsWithChildren } from 'react';

import {
  CurrentDateContextProvider,
  useCurrentDateApi,
} from '../../context/CurrentDateContext';

import Tooltip from './Tooltip';
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
