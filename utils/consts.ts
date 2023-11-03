import * as d3 from 'd3';

import { type Margin, getDimensions } from './dimensions';

const size = 740;
const margin: Margin = {
  top: 90,
  right: 90,
  bottom: 50,
  left: 50,
};
export const dimensions = getDimensions(size, size, margin);

export const dotSize = 4;

export const gray = '#cfd4d8';
export const darkGray = '#34495e';

// peripherals
export const tickSize = 5;
export const tickLabelSize = 10;
export const tickLabelOffset = 10;

export const axisLabelSize = 14;
export const axisLabelOffset = 45;

export const gradientId = 'legend-gradient';
export const numOfGradientStops = 10;
export const gradientStops = d3.range(numOfGradientStops).map((d, i) => {
  const stop = i / (numOfGradientStops - 1);
  return {
    offset: `${stop * 100}%`,
    stopColor: d3.interpolateRainbow(-stop),
  };
});
export const gradientWidth = 250;
export const gradientHeight = 25;
export const gradientOffset = 10;
