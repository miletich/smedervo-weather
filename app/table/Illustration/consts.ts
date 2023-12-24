import { type Margin, getDimensions } from '@/utils/dimensions';

const size = 460;
const margin: Margin = {
  top: 30,
  right: 30,
  bottom: 40,
  left: 30,
};
export const dimensions = getDimensions(size, size, margin);

export const rowHeight = 30;
