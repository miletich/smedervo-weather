import * as d3 from 'd3';

import { domains } from '@/static/domains';
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
    .domain(domains.cloudcover)
    .range([0, cloudMaxRadius]);

  return data.map((d) => ({
    id: dateAccessor(d).toISOString(),
    r: cloudScale(cloudCoverAccessor(d)),
    cx: getXForDataPoint(d, cloudOffset),
    cy: getYForDataPoint(d, cloudOffset),
  }));
};
