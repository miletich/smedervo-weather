import { type Margin, getDimensions } from '@/utils/dimensions';

const size = 460;
const margin: Margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

export const dimensions = getDimensions(size, size, margin);

export const rowHeight = 30;
export const offset = rowHeight / 3;

export const textHeight = rowHeight - offset * 2;
export const textWidth = dimensions.innerHeight / 3 + offset * 4;
export const textRx = offset / 3;

export const daylightY = rowHeight / 2 - offset / 3;
export const daylightX = textWidth + offset * 1.5;
export const dayLightScale = 0.4;

export const moonX = daylightX + textWidth - offset * 3.5;
export const moonY = offset / 2;
export const moonScale = 0.27;

export const uvIndexX = dimensions.innerHeight - offset * 3;
export const uvIndexY = offset;
export const uvIndexScale = 0.7;
