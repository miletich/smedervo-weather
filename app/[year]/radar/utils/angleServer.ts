import { dateAccessor, type Datum } from '@/utils/data';

import { getScales } from './scalesServer';
import { getCoordinatesForAngle } from './angle';

type GetCoordinateForDataPoint = (d: Datum, offset: number) => number;
type GetCoordinatesForDataPoint = () => Promise<
  Record<'getXForDataPoint' | 'getYForDataPoint', GetCoordinateForDataPoint>
>;
export const getCoordinatesForDataPoint: GetCoordinatesForDataPoint =
  async () => {
    const { angleScale } = await getScales();
    const getXForDataPoint: GetCoordinateForDataPoint = (d, offset) =>
      getCoordinatesForAngle(angleScale(dateAccessor(d)), offset)[0];
    const getYForDataPoint: GetCoordinateForDataPoint = (d, offset) =>
      getCoordinatesForAngle(angleScale(dateAccessor(d)), offset)[1];

    return {
      getXForDataPoint,
      getYForDataPoint,
    };
  };
