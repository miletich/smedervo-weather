import {
  gradientHeight,
  gradientHighlightOpacity,
  gradientHighlightStrokeWidth,
  gradientHighlightWidth,
  gray,
  white,
} from '../../consts';

type Props = {
  x: number;
};

export default function HighlightBar({ x }: Props) {
  return (
    <rect
      x={x}
      y={0}
      fill={white}
      width={gradientHighlightWidth}
      height={gradientHeight}
      stroke={white}
      strokeWidth={gradientHighlightStrokeWidth}
      fillOpacity={gradientHighlightOpacity}
      pointerEvents="none"
    />
  );
}
