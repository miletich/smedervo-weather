import {
  gradientHeight,
  gradientHighlightOpacity,
  gradientHighlightStrokeWidth,
  gradientHighlightWidth,
  gray,
} from '@/utils/consts';

type Props = {
  x: number;
};

export default function HighlightBar({ x }: Props) {
  return (
    <rect
      x={x}
      y={0}
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
