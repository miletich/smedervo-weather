import { type MouseEventHandler } from 'react';

import { gradientHeight, gradientWidth } from '../../consts';

type Props = {
  onHover: MouseEventHandler;
  onBlur: MouseEventHandler;
};

export default function GradientHoverListeningRect({ onHover, onBlur }: Props) {
  return (
    <rect
      onMouseMoveCapture={onHover}
      onMouseLeave={onBlur}
      pointerEvents="bounding-box"
      width={gradientWidth + 2}
      height={gradientHeight}
      fill="transparent"
    />
  );
}
