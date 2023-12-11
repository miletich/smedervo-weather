import { createPortal } from 'react-dom';

import {
  dateAccessor,
  tempMinAccessor,
  type Datum,
  tempMaxAccessor,
  uvIndexAccessor,
  cloudCoverAccessor,
  precipitationProbabilityAccessor,
} from '@/utils/data';
import { formatTooltipDate } from '@/utils/date';
import P from '@/components/P';

import { black, darkGray, yellow } from '../consts';

import { type Coordinates } from './eventHandlers';
import TooltipMetic, {
  TooltipMetricTitle,
  TooltipMetricValue,
} from './TooltipMetric';
import TooltipMetric from './TooltipMetric';
import {
  formatNumber,
  useCurrentDatum,
  useTempColors,
  useTooltipAngle,
} from './utils';
import TooltipTemperature from './TooltipTemperature';

type Props = {
  coordinates: Exclude<Coordinates, null>;
  data: Datum[];
};

export default function Tooltip({ coordinates, data }: Props) {
  const angle = useTooltipAngle(coordinates);
  const datum = useCurrentDatum(angle, data);
  const [minColor, maxColor] = useTempColors(datum, data);

  return createPortal(
    <div
      style={{ top: 0, left: 0 }}
      className="tooltip
      absolute z-10 w-60 pointer-events-none px-4 py-2.5 
      text-sm leading-6 text-center 
      bg-white border border-zinc-200 "
    >
      <P className="text-lg text-zinc-600 font-semibold mb-1">
        {formatTooltipDate(dateAccessor(datum))}
      </P>
      <P className="text-zinc-600">
        <TooltipTemperature color={minColor}>
          {formatNumber(tempMinAccessor(datum))}
        </TooltipTemperature>{' '}
        -{' '}
        <TooltipTemperature color={maxColor}>
          {formatNumber(tempMaxAccessor(datum))}
        </TooltipTemperature>
      </P>
      <TooltipMetric>
        <TooltipMetricTitle color={yellow}>UV Index</TooltipMetricTitle>
        <TooltipMetricValue color={yellow}>
          {formatNumber(uvIndexAccessor(datum))}
        </TooltipMetricValue>
      </TooltipMetric>
      <TooltipMetric>
        <TooltipMetricTitle color={darkGray}>Cloud Cover</TooltipMetricTitle>
        <TooltipMetricValue color={darkGray}>
          {formatNumber(cloudCoverAccessor(datum))}
        </TooltipMetricValue>
      </TooltipMetric>
      <TooltipMetric>
        <TooltipMetricTitle color={black}>
          Precipitation Probability
        </TooltipMetricTitle>
        <TooltipMetricValue color={black}>{`${formatNumber(
          precipitationProbabilityAccessor(datum),
          0
        )}%`}</TooltipMetricValue>
      </TooltipMetric>
    </div>,
    document.body
  );
}