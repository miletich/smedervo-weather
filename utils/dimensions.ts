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

type GetDimension = (
  width: number,
  height: number,
  specifiedMargin?: Partial<Margin>
) => Dimensions;
export const getDimension: GetDimension = (
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
