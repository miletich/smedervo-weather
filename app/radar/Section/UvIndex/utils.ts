import getDataServer from '@/utils/getDataServer';
import { uvIndexAccessor } from '@/utils/data';

import {
  uvIndexOffsetInner,
  uvIndexOffsetOuter,
  uvIndexThreshold,
} from '../../consts';
import { getCoordinatesForDataPoint } from '../../utils/angleServer';

type GetUvIndicesProps = () => Promise<
  Record<'x1' | 'y1' | 'x2' | 'y2', number>[]
>;
export const getUvIndicesProps: GetUvIndicesProps = async () => {
  const data = await getDataServer();
  const { getXForDataPoint, getYForDataPoint } =
    await getCoordinatesForDataPoint();

  return data
    .filter((d) => uvIndexAccessor(d) > uvIndexThreshold)
    .map((d) => ({
      x1: getXForDataPoint(d, uvIndexOffsetInner),
      y1: getYForDataPoint(d, uvIndexOffsetInner),
      x2: getXForDataPoint(d, uvIndexOffsetOuter),
      y2: getYForDataPoint(d, uvIndexOffsetOuter),
    }));
};
