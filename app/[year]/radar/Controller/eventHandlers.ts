import { pointer } from 'd3-selection';

export type Coordinates = [number, number] | null;
export type SetCoordinates = (coordinates: Coordinates) => void;
export type MouseEventHandler = (
  setCoordinates: SetCoordinates
) => React.MouseEventHandler<SVGCircleElement>;

export const onMouseMove: MouseEventHandler = (setCoordinates) => (e) => {
  const coordinates = pointer(e);
  setCoordinates(coordinates);
};

export const onMouseLeave: MouseEventHandler = (setCoordinates) => () => {
  setCoordinates(null);
};
