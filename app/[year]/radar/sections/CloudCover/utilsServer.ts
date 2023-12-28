import * as d3 from 'd3';

import getDataServer from '@/utils/getDataServer';
import { cloudCoverAccessor, dateAccessor } from '@/utils/data';

import { cloudMaxRadius, cloudOffset } from '../../consts';
import { getCoordinatesForDataPoint } from '../../utils/angleServer';

type CloudProps = Record<'r' | 'cx' | 'cy', number> & { id: string };
type GetCloudsProps = () => Promise<CloudProps[]>;
export const getCloudsProps: GetCloudsProps = async () => {
  const data = await getDataServer();
  const { getXForDataPoint, getYForDataPoint } =
    await getCoordinatesForDataPoint();

  const cloudScale = d3
    .scaleSqrt()
    .domain(<[number, number]>d3.extent(data, cloudCoverAccessor))
    .range([0, cloudMaxRadius]);

  return data.map((d) => ({
    id: dateAccessor(d).toISOString(),
    r: cloudScale(cloudCoverAccessor(d)),
    cx: getXForDataPoint(d, cloudOffset),
    cy: getYForDataPoint(d, cloudOffset),
  }));
};
