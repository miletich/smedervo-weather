'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import { dateAccessor, tempMaxAccessor, tempMinAccessor } from '@/utils/data';
import { formatTooltipDate } from '@/utils/date';
import { gray, tooltip } from '../../../../styles/tokens.stylex';

import { useCurrentDateData } from '../../context/CurrentDateContext';
import {
  tooltipOffset,
  tooltipPadding,
  tooltipFontSize,
  tooltipLineHeight,
  tooltipFontSizeLg,
  dotSize,
  dotHighlightSize,
  dotHighlightStrokeWidth,
} from '../../consts';

import TooltipSvg from './TooltipSvg';

type Position = Record<'top' | 'left', number>;

export default function Tooltip() {
  const tooltipHeight =
    tooltipFontSizeLg +
    tooltipFontSize * tooltipLineHeight +
    tooltipPadding * 2;
  const currentDate = useCurrentDateData();
  const firstLineRef = useRef<SVGTextElement>(null);
  const secondLineRef = useRef<SVGTextElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const firstLineWidth = firstLineRef.current?.getBBox().width || 0;
    const secondLineWidth = secondLineRef.current?.getBBox().width || 0;

    setWidth(Math.max(firstLineWidth, secondLineWidth));
  }, [currentDate]);

  if (!currentDate) return null;

  const { datum, center } = currentDate;

  return (
    <g
      className="tooltip pointer-events-none"
      transform={`translate(${center[0]}, ${center[1] - dotSize})`}
    >
      <circle
        cy={dotSize}
        r={dotHighlightSize}
        {...stylex.props(styles.circle)}
        strokeWidth={dotHighlightStrokeWidth}
      />
      <TooltipSvg
        offset={tooltipOffset}
        width={width + tooltipPadding * 2}
        height={tooltipHeight}
      />
      <text
        ref={firstLineRef}
        fontSize={tooltipFontSize}
        y={-tooltipHeight + tooltipPadding}
        textAnchor="middle"
        fontWeight={600}
        {...stylex.props(styles.text)}
      >
        {formatTooltipDate(dateAccessor(datum))}
      </text>
      <text
        ref={secondLineRef}
        fontSize={tooltipFontSize}
        textAnchor="middle"
        {...stylex.props(styles.text)}
        y={
          -tooltipHeight + tooltipPadding + tooltipFontSize * tooltipLineHeight
        }
      >
        {`${tempMinAccessor(datum).toFixed()}°C - ${tempMaxAccessor(
          datum
        ).toFixed()}°C`}
      </text>
    </g>
  );
}

const styles = stylex.create({
  text: {
    fill: tooltip.defaultFill,
  },
  circle: {
    stroke: tooltip.circleStroke,
    fill: 'transparent',
  },
});
