'use client';

import * as stylex from '@stylexjs/stylex';

import type { PropsWithChildren } from 'react';

import { type Datum, dateAccessor } from '@/utils/data';
import { formatShortDate } from '@/utils/date';
import { colorScheme } from '../../../../../styles/tokens.stylex';

import { gradientLabelOffset, gradientWidth } from '../../consts';
import { useHighlightData } from '../../context/HighlightContext';

type Props = PropsWithChildren<{
  data: Datum[];
}>;

export default function GradientLegendText({ data, children }: Props) {
  const hightedIs = useHighlightData();

  if (hightedIs.length === 0) return children;

  const first = dateAccessor(data[hightedIs[0]]);
  const last = dateAccessor(data[hightedIs[hightedIs.length - 1]]);

  return (
    <text
      x={gradientWidth / 2}
      textAnchor="middle"
      dy={-gradientLabelOffset}
      {...stylex.props(styles.text)}
    >{`${formatShortDate(first)} - ${formatShortDate(last)}`}</text>
  );
}

const styles = stylex.create({
  text: {
    fill: colorScheme.text,
  },
});
