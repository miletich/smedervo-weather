import {
  gradientHeight,
  gradientHighlightOpacity,
  gradientHighlightStrokeWidth,
  gradientHighlightWidth,
  gradientX,
  gradientY,
  gray,
} from '@/utils/consts';

type Props = {
  x: number;
};

export default function HighlightBar({ x }: Props) {
  return (
    <rect
      x={gradientX + x}
      y={gradientY}
      width={gradientHighlightWidth}
      height={gradientHeight}
      fill={gray}
      stroke="#fff"
      strokeWidth={gradientHighlightStrokeWidth}
      opacity={gradientHighlightOpacity}
      strokeOpacity={1}
      pointerEvents="none"
    />
  );
}
