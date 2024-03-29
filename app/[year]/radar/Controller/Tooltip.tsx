import * as stylex from '@stylexjs/stylex';

import {
  type Datum,
  dateAccessor,
  tempMinAccessor,
  tempMaxAccessor,
} from '@/utils/data';
import { formatTooltipDate } from '@/utils/date';
import P from '@/components/P';
import { tooltip } from '../../../../styles/tokens.stylex';

import { tooltipHeight, tooltipWidth } from '../consts';

import { type Coordinates } from './eventHandlers';
import {
  TooltipMetrics,
  TooltipMetric,
  TooltipMetricTitle,
  TooltipMetricValue,
} from './TooltipMetrics';
import {
  formatNumber,
  useCurrentDatum,
  useTempColors,
  useTooltipAngle,
  useTooltipTranslate,
  useTooltipMetrics,
  useTooltipPosition,
} from './utils';
import TooltipDate from './TooltipDate';
import {
  TooltipTemperature,
  TooltipTemperatureSpan,
} from './TooltipTemperature';

type Props = {
  coordinates: Exclude<Coordinates, null>;
  data: Datum[];
};

export default function Tooltip({ coordinates, data }: Props) {
  const angle = useTooltipAngle(coordinates);
  const [x, y] = useTooltipPosition(angle);
  const datum = useCurrentDatum(angle, data);
  const tooltipTranslate = useTooltipTranslate(angle);
  const [minColor, maxColor] = useTempColors(datum, data);
  const metrics = useTooltipMetrics(datum);

  return (
    <g transform={`translate(${x},${y})`} {...stylex.props(styles.default)}>
      <rect
        width={tooltipWidth}
        height={tooltipHeight}
        {...stylex.props(styles.wrapper)}
      />
      <TooltipDate>{formatTooltipDate(dateAccessor(datum))}</TooltipDate>
      <TooltipTemperature>
        <TooltipTemperatureSpan fill={minColor}>
          {formatNumber(tempMinAccessor(datum))}
        </TooltipTemperatureSpan>
        <TooltipTemperatureSpan> - </TooltipTemperatureSpan>
        <TooltipTemperatureSpan fill={maxColor}>
          {formatNumber(tempMaxAccessor(datum))}
        </TooltipTemperatureSpan>
      </TooltipTemperature>
      <TooltipMetrics>
        {metrics.map(({ name, value, fill }, i) => (
          <TooltipMetric key={name} fill={fill} i={i}>
            <TooltipMetricTitle>{name}</TooltipMetricTitle>
            <TooltipMetricValue>{value}</TooltipMetricValue>
          </TooltipMetric>
        ))}
      </TooltipMetrics>
    </g>
  );
}

const styles = stylex.create({
  default: {
    fill: tooltip.defaultFill,
  },
  wrapper: {
    fill: tooltip.wrapperFill,
    stroke: tooltip.wrapperStroke,
  },
});
