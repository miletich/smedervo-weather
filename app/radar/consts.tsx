import { getRadialDimensions } from '@/utils/dimensions';

export const dimensions = getRadialDimensions(740, 120);

// colors
export const white = '#fff';
export const black = '#000';
export const gray = '#dadadd';
export const midGray = '#c8d6e5';
export const darkGray = '#8395a7';
export const yellow = '#feca57';

// ticks
export const monthTickLabelOffset = 1.38;
export const monthTickLabelSize = 14;
export const monthTickLabelWeight = 900;

export const temperatureTickLabelSize = 12;
export const temperatureTickLabelStroke = 2;
export const temperatureLabelTickOffsetX = 7;
export const temperatureTickLabelWeight = 600;

// freezing marker
export const freezingColor = '#00d2d3';
export const freezingOpacity = 0.15;

// temperature
export const temperatureGradientId = 'temperature-gradient';

// uv index
export const uvIndexThreshold = 8;
export const uvIndexOffsetInner = 0.95;
export const uvIndexOffsetOuter = uvIndexOffsetInner + 0.1;
export const uvIndexStrokeWidth = 2;

// precipitation
export const precipitationOffset = 1.14;
export const precipitationMaxRadius = 8;
export const precipitationOpacity = 0.5;

// cloud cover
export const cloudOffset = 1.27;
export const cloudMaxRadius = 10;
export const cloudOpacity = 0.6;
