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

export const textOffset = 10;
export const textHeight = rowHeight - textOffset * 2;
export const textWidth = dimensions.innerHeight / 3;
export const textRx = textOffset / 3;
