import {
  gradientId,
  gradientStops,
  gradientYear,
  seasonStartDates,
} from '@/utils/consts';

export default function Defs() {
  return (
    <defs>
      <linearGradient id={gradientId}>
        {gradientStops.map((stopProps) => (
          <stop key={stopProps.offset} {...stopProps} />
        ))}
      </linearGradient>
    </defs>
  );
}
