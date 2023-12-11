import { createPortal } from 'react-dom';

import type { Datum } from '@/utils/data';
import P from '@/components/P';

import { type Coordinates } from './eventHandlers';
import TooltipMetic, {
  TooltipMetricTitle,
  TooltipMetricValue,
} from './TooltipMetric';
import TooltipMetric from './TooltipMetric';
import { useCurrentDatum, useTooltipAngle } from './utils';

type Props = {
  coordinates: Exclude<Coordinates, null>;
  data: Datum[];
};

export default function Tooltip({ coordinates, data }: Props) {
  const angle = useTooltipAngle(coordinates);
  const datum = useCurrentDatum(angle, data);

  return createPortal(
    <div
      style={{ top: 0, left: 0 }}
      className="tooltip
      absolute z-10 w-60 pointer-events-none px-4 py-2.5 
      text-sm leading-6 text-center 
      bg-white border border-zinc-200 "
    >
      <P>Date</P>
      <P>
        <span>Min</span> - <span>Max</span>
      </P>
      <TooltipMetric>
        <TooltipMetricTitle>UV Index</TooltipMetricTitle>
        <TooltipMetricValue>val</TooltipMetricValue>
      </TooltipMetric>
      <TooltipMetric>
        <TooltipMetricTitle>Cloud Cover</TooltipMetricTitle>
        <TooltipMetricValue>val</TooltipMetricValue>
      </TooltipMetric>
      <TooltipMetric>
        <TooltipMetricTitle>Precipitation</TooltipMetricTitle>
        <TooltipMetricValue>val</TooltipMetricValue>
      </TooltipMetric>
    </div>,
    document.body
  );
}
