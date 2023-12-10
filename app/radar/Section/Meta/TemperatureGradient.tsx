import * as d3 from 'd3';

import { temperatureGradientId } from '../../consts';

export const gradientScale = d3.interpolateYlOrRd;
export const numOfGradientStops = 10;
export const gradientStopsProps = d3.range(numOfGradientStops).map((i) => ({
  id: i,
  stop: `${(i * 100) / (numOfGradientStops - 1)}%`,
  stopColor: gradientScale(i / (numOfGradientStops - 1)),
}));

export default function TemperatureGradient() {
  return (
    <radialGradient id={temperatureGradientId}>
      {gradientStopsProps.map(({ id, ...rest }) => (
        <stop key={id} {...rest} />
      ))}
    </radialGradient>
  );
}
