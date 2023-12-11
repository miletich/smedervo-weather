'use client';

import { useState } from 'react';

import ListeningCircle from './ListeningCircle';
import { type Coordinates } from './eventHandlers';
import TooltipArc from './TooltipArc';

export default function Controller() {
  const [coordinates, setCoordinates] = useState<Coordinates>(null);

  return (
    <g className="controller">
      {coordinates && <TooltipArc coordinates={coordinates} />}
      <ListeningCircle setCoordinates={setCoordinates} />
    </g>
  );
}
