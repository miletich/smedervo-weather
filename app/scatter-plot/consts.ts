import * as d3 from 'd3';

import { type Margin, getDimensions } from './utils/dimensions';

const size = 740;
const margin: Margin = {
  top: 90,
  right: 90,
  bottom: 50,
  left: 50,
};
export const dimensions = getDimensions(size, size, margin);

export const white = '#fff';
export const gray = '#cfd4d8';
export const midGray = '#cbd2d7';
export const darkGray = '#34495e';

// scatter plot
export const dotSize = 4;

export const dotHighlightSize = 7;
export const dotHighlightStrokeWidth = 2;

// histograms
export const histogramHeight = 70;
export const histogramMargin = 10;
export const histogramOpacity = 0.5;

// axes
export const tickSize = 5;
export const tickLabelSize = 10;
export const tickLabelOffset = 10;

export const axisLabelSize = 14;
export const axisLabelOffset = 42;

// tooltip
export const tooltipFontSizeLg = 18;
export const tooltipFontSize = 16;
export const tooltipLineHeight = 1.4;
export const tooltipOffset = 14;
export const tooltipPadding = 10;

// hover lines
export const hoverLineThickness = 10;
export const hoverLineColor = '#5758bb';

// gradient legend
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
export const gradientX = dimensions.innerWidth - gradientWidth - gradientOffset;
export const gradientY =
  dimensions.innerHeight - gradientHeight - gradientOffset;

export const gradientLabelSize = 12;
export const gradientLabelOffset = 6;
export const gradientYear = 2022;
export const seasonStartDates = ['4-1', '7-1', '10-1'].map(
  (d) => new Date(`2022-${d}`)
);
export const gradientHighlightStrokeWidth = 1;
export const gradientHighlightWidth =
  gradientWidth * 0.05 - gradientHighlightStrokeWidth;
export const gradientHighlightOpacity = 0.4;
