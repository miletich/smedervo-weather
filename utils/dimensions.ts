export type Margin = Record<'top' | 'right' | 'bottom' | 'left', number>;
export type WandH = Record<'width' | 'height', number>;
export type InnerWandH = Record<'innerWidth' | 'innerHeight', number>;
export type Dimensions = WandH & InnerWandH & { margin: Margin };

const defaultMargin: Margin = { top: 0, right: 0, bottom: 0, left: 0 };

type GetMargin = (specifiedMargin?: Partial<Margin>) => Margin;
export const getMargin: GetMargin = (specifiedMargin) => ({
  ...defaultMargin,
  ...specifiedMargin,
});

type GetDimensions = (
  width: number,
  height: number,
  specifiedMargin?: Partial<Margin>
) => Dimensions;
export const getDimensions: GetDimensions = (
  width,
  height,
  specifiedMargin = defaultMargin
) => {
  const margin = getMargin(specifiedMargin);

  return {
    width,
    height,
    innerWidth: width - margin.left - margin.right,
    innerHeight: height - margin.top - margin.bottom,
    margin,
  };
};

export type RadialDimensions = Record<
  'size' | 'radius' | 'margin' | 'innerSize',
  number
>;

type GetRadialDimensions = (size: number, margin: number) => RadialDimensions;
export const getRadialDimensions: GetRadialDimensions = (size, margin) => ({
  size,
  margin,
  innerSize: size - margin * 2,
  radius: size / 2 - margin,
});

type Clamp = (min: number, value: number, max: number) => number;
export const clamp: Clamp = (min, value, max) => {
  if (value < min) return min;
  if (value > max) return max;

  return value;
};
