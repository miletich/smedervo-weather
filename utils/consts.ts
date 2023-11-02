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

export const tickSize = 5;
export const tickLabelSize = 12;
export const tickLabelOffset = 10;

export const gray = '#cfd4d8';
export const darkGray = '#34495e';
