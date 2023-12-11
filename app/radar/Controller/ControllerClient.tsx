'use client';

import { useState } from 'react';

import { Datum } from '@/utils/data';

import ListeningCircle from './ListeningCircle';
import { type Coordinates } from './eventHandlers';
import TooltipArc from './TooltipArc';
import Tooltip from './Tooltip';

type Props = { data: Datum[] };
export default function ControllerClient({ data }: Props) {
  const [coordinates, setCoordinates] = useState<Coordinates>(null);

  return (
    <g className="controller">
      {coordinates && (
        <>
          <TooltipArc coordinates={coordinates} />
          <Tooltip coordinates={coordinates} data={data} />
        </>
      )}

      <ListeningCircle setCoordinates={setCoordinates} />
    </g>
  );
}
