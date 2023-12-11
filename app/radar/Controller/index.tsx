'use client';

import { useState } from 'react';

import ListeningCircle from './ListeningCircle';
import { type Coordinates } from './eventHandlers';

export default function Controller() {
  const [coordinates, setCoordinates] = useState<Coordinates>(null);

  return (
    <g className="controller">
      <ListeningCircle setCoordinates={setCoordinates} />
    </g>
  );
}
