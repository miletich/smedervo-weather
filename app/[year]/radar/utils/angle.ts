import { dimensions } from '../consts';

type GetCoordinatesForAngle = (
  angle: number,
  offset?: number
) => [number, number];
export const getCoordinatesForAngle: GetCoordinatesForAngle = (
  angle,
  offset = 1
) => [
  Math.cos(angle - Math.PI / 2) * dimensions.radius * offset,
  Math.sin(angle - Math.PI / 2) * dimensions.radius * offset,
];

type GetAngleForCoordinates = (x: number, y: number) => number;
export const getAngleForCoordinates: GetAngleForCoordinates = (x, y) =>
  Math.atan2(y, x);
