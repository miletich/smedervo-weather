import type { PropsWithChildren } from 'react';

import HighlightController from './HighlightController';
import TooltipController from './TooltipController';
import VoronoiListeners from './TooltipController/VoronoiListeners';

export default function Controllers({ children }: PropsWithChildren) {
  return (
    <HighlightController>
      <TooltipController>
        {children}
        <VoronoiListeners />
      </TooltipController>
    </HighlightController>
  );
}
