import {
  dateAccessor,
  tempMinAccessor,
  type Datum,
  tempMaxAccessor,
  uvIndexAccessor,
  cloudCoverAccessor,
  precipitationProbabilityAccessor,
  precipitationTypeAccessor,
} from '@/utils/data';
import { formatTooltipDate } from '@/utils/date';
import P from '@/components/P';

import {
  black,
  darkGray,
  gray,
  tooltipHeight,
  tooltipWidth,
  white,
  yellow,
} from '../consts';

import { type Coordinates } from './eventHandlers';
import TooltipMetic, {
  TooltipMetricTitle,
  TooltipMetricValue,
} from './TooltipMetric';
import TooltipMetric from './TooltipMetric';
import {
  formatNumber,
  useCurrentDatum,
  usePrecipitationColor,
  useTempColors,
  useTooltipAngle,
  useTooltipPosition,
} from './utils';
import TooltipTemperature from './TooltipTemperature';
import TooltipDate from './TooltipDate';

type Props = {
  coordinates: Exclude<Coordinates, null>;
  data: Datum[];
};

export default function Tooltip({ coordinates, data }: Props) {
  const angle = useTooltipAngle(coordinates);
  const [x, y] = useTooltipPosition(angle);
  const datum = useCurrentDatum(angle, data);
  const [minColor, maxColor] = useTempColors(datum, data);
  const precipitationColor = usePrecipitationColor(datum);

  return (
    <g transform={`translate(${x},${y})`} className="tooltip fill-zinc-600">
      <rect
        width={tooltipWidth}
        height={tooltipHeight}
        fill={white}
        stroke={gray}
      />
      <TooltipDate>{formatTooltipDate(dateAccessor(datum))}</TooltipDate>
    </g>
  );
}
{
  /*  aa
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
      <TooltipMetric>
        <TooltipMetricTitle color={precipitationColor}>
          Precipitation Type
        </TooltipMetricTitle>
        <TooltipMetricValue color={precipitationColor}>
          {precipitationTypeAccessor(datum) || 'none'}
        </TooltipMetricValue>
      </TooltipMetric> */
}
