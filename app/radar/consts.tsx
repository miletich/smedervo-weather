import { blue, zinc } from '@/consts/colors';
import { getRadialDimensions } from '@/utils/dimensions';

export const wrapperId = 'radar-weather';
export const dimensions = getRadialDimensions(740, 120);

// ticks
export const monthTickLabelOffset = 1.38;
export const monthTickLabelSize = 14;
export const monthTickLabelWeight = 900;

export const temperatureTickLabelSize = 12;
export const temperatureTickLabelStroke = 2;
export const temperatureLabelTickOffsetX = 7;
export const temperatureTickLabelWeight = 600;

// freezing marker
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
export const precipitationTypeColors = [blue[400], zinc[600], zinc[300]];
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
export const tooltipWidth = 250;
export const tooltipHeight = 145;
export const tooltipOffset = 1.4;
export const tooltipOffsetAdjustThreshold = 70;
export const tooltipAngleOffset = 0.015;
export const tooltipArcOpacity = 0.2;

// tooltip text
export const tooltipTextCenter = tooltipWidth / 2;
export const tooltipTextAdjust = 16;
export const tooltipTextLeft = tooltipWidth - tooltipTextAdjust;
export const tooltipTextRight = tooltipTextAdjust;
export const tooltipTextDateSize = 18;
export const tooltipTextTemperatureY =
  tooltipTextDateSize + tooltipTextAdjust * 2;

// tooltip metrics
export const tooltipMetricsY =
  tooltipTextTemperatureY + tooltipTextAdjust * 1.3;
export const tooltipMetricNameWeight = 700;
export const tooltipMetricFontSize = 12;
