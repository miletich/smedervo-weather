'use client';

import { genScales } from '@/utils/scales';
import { Datum, dateAccessor } from '@/utils/data';
import {
  genHistogramArea,
  genHistogramYScale,
  genTopHistogram,
} from '@/utils/histograms';
import { useHighlightData } from '@/context/HighlightContext';

type Props = {
  data: Datum[];
};

export default function RightHistogramHighlight({ data }: Props) {
  const highlightedIs = useHighlightData();

  if (highlightedIs.length === 0) return null;

  const highlightedData = data.slice(
    highlightedIs[0],
    highlightedIs[highlightedIs.length - 1]
  );
  const { yScale: xScale, colorScale } = genScales(data);
  const bins = genTopHistogram(xScale)(data);
  const highlightedBins = genTopHistogram(xScale)(highlightedData);
  const yScale = genHistogramYScale(bins);
  const area = genHistogramArea(highlightedBins)({ xScale, yScale });
  const fill = colorScale(
    dateAccessor(data[highlightedIs[Math.round(highlightedIs.length / 2)]])
  );

  return <path d={area} fill={fill} />;
}
