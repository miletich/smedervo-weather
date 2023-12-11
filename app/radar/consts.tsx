import { getRadialDimensions } from '@/utils/dimensions';

export const dimensions = getRadialDimensions(740, 120);

// colors
export const white = '#fff';
export const black = '#34495e';
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
export const precipitationTypes = ['rain', 'sleet', 'snow'];
export const precipitationTypeColors = ['#54a0ff', '#636e72', '#b2bec3'];
export const precipitationOffset = 1.14;
export const precipitationMaxRadius = 8;
export const precipitationOpacity = 0.5;

// cloud cover
export const cloudOffset = 1.27;
export const cloudMaxRadius = 10;
export const cloudOpacity = 0.6;

// annotations
export const annotationOpacity = 0.6;
export const annotationTextSize = 10;
export const annotationTextXOffset = 6;
export const annotationOuterOffset = 1.6;
export const annotationInnerOffsetTemperature = 0.5;
export const annotationAngleTemperature = Math.PI * 0.7;
export const annotationAngleCloud = Math.PI * 0.23;
export const annotationAnglePrecipitation = Math.PI * 0.26;
export const annotationUvAngleIndex = Math.PI * 0.734;
export const annotationAngleFreezing = Math.PI * 0.9;
export const precipitationTypeLabelXOffset = 25;
export const precipitationTypeCircleXOffset = 16;
export const precipitationTypeYOffsetBase = 16;
export const precipitationTypeAnnotationR = 4;
export const precipitationTypeCircleOpacity = 0.7;

// tooltip
export const tooltipAngleOffset = 0.015;
export const tooltipArcOpacity = 0.2;
