import type { MouseEventHandler } from 'react';

import getRange from '@/utils/getRange';

import {
  gradientHighlightStrokeWidth,
  gradientHighlightWidth,
  gradientWidth,
  gradientX,
  gradientY,
} from '../../consts';
import { clamp } from '../../utils/dimensions';

type GetCurrentPosition = (
  e: Parameters<MouseEventHandler<SVGRectElement>>[0]
) => number;
export const getCurrentPosition: GetCurrentPosition = (e) => {
  const rawPosition = clamp(
    0,
    e.clientX - (e.target as SVGRectElement).getBoundingClientRect().left,
    gradientWidth
  );
  const minPosition = 0 + gradientHighlightStrokeWidth;
  const maxPosition =
    gradientWidth - gradientHighlightWidth - gradientHighlightStrokeWidth;
  const currentPosition = clamp(minPosition, rawPosition, maxPosition);

  return currentPosition;
};

type GetIdxRange = (
  e: Parameters<MouseEventHandler<SVGRectElement>>[0],
  ratio: number
) => number[];
export const getIdxRange: GetIdxRange = (e, ratio) => {
  const currentPosition = getCurrentPosition(e);

  const startIdx = Math.floor(currentPosition * ratio);
  const endIdx = Math.ceil(
    (currentPosition + gradientHighlightWidth + gradientHighlightStrokeWidth) *
      ratio
  );
  const idxRange = getRange(startIdx, endIdx).map((a) => a - 1);

  return idxRange;
};
