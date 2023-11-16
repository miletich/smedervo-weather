'use client';

import {
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import HighlightBar from './HighlightBar';
import GradientHoverListeningRect from './GradientHoverListeningRect';
import getRange from '@/utils/getRange';
import { number } from 'zod';
import { getCurrentPosition, getIdxRange } from './utils';
import { gradientX, gradientY } from '@/utils/consts';

type Props = {
  ratio: number;
};

export default function GradientHoverListener({ ratio }: Props) {
  // eslint-disable-next-line
  const [position, setPosition] = useState<number | null>(null);
  const [idxRange, setIdxRange] = useState<number[]>([]);

  const handleHover: MouseEventHandler<SVGRectElement> = (e) => {
    e.stopPropagation();

    setPosition(getCurrentPosition(e));
    setIdxRange(getIdxRange(e, ratio));
  };

  const handleBlur: MouseEventHandler = () => {
    setPosition(null);
    setIdxRange([]);
  };

  return (
    <g className="legend" transform={`translate(${gradientX} ${gradientY})`}>
      {position && <HighlightBar x={position} />}
      <GradientHoverListeningRect onHover={handleHover} onBlur={handleBlur} />
    </g>
  );
}
