'use client';

import { useHighlightData } from '@/context/HighlightContext';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  i: number;
}>;

export default function DotController({ children, i }: Props) {
  const highlighIs = useHighlightData();
  const isFiltered = highlighIs.length > 0;
  const isHighlighted = highlighIs.includes(i);

  if (!isFiltered) return children;

  if (isHighlighted) {
    return children;
  } else {
    return (
      <g opacity={0.1} transform="scale(0.5)">
        {children}
      </g>
    );
  }
}
