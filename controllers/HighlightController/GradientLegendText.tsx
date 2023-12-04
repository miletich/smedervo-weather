'use client';

import type { PropsWithChildren } from 'react';

import { useHighlightData } from '@/context/HighlightContext';
import { gradientLabelOffset, gradientWidth } from '@/utils/consts';
import { type Datum, dateAccessor } from '@/utils/data';
import { formatLegendDate } from '@/utils/date';

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
    >{`${formatLegendDate(first)} - ${formatLegendDate(last)}`}</text>
  );
}
