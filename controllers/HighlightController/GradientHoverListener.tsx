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
import { getCurrentPosition, getIdxRange } from './utils';
import { gradientX, gradientY } from '@/utils/consts';
import { useHighlightDataApi } from '@/context/HighlightContext';

type Props = {
  ratio: number;
};

export default function GradientHoverListener({ ratio }: Props) {
  const [position, setPosition] = useState<number | null>(null);
  const setHighlightIs = useHighlightDataApi();

  const handleHover: MouseEventHandler<SVGRectElement> = (e) => {
    e.stopPropagation();

    setPosition(getCurrentPosition(e));
    setHighlightIs(getIdxRange(e, ratio));
  };

  const handleBlur: MouseEventHandler = () => {
    setPosition(null);
    setHighlightIs([]);
  };

  return (
    <g className="legend" transform={`translate(${gradientX} ${gradientY})`}>
      {position && <HighlightBar x={position} />}
      <GradientHoverListeningRect onHover={handleHover} onBlur={handleBlur} />
    </g>
  );
}
