import { type Margin, getDimensions } from '@/utils/dimensions';

const size = 454;
const margin: Margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};
export const dimensions = getDimensions(size, size, margin);
