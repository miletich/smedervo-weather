import { gradientId, gradientStops, gradientYear } from '../../consts';

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
