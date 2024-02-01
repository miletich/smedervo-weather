import * as d3 from 'd3';

import {
  type PrecipitationType,
  precipitationTypeAccessor,
  precipitationProbabilityAccessor,
  dateAccessor,
} from '@/utils/data';
import getDataServer from '@/utils/getDataServer';

import { precipitationMaxRadius, precipitationOffset } from '../../consts';
import { getCoordinatesForDataPoint } from '../../utils/angleServer';
import { precipitationTypeScale } from './utils';
import { domains } from '@/static/domains';

type PrecipitationProps = Record<'r' | 'cx' | 'cy', number> &
  Record<'id' | 'fill', string>;
type GetPrecipitationsProps = () => Promise<PrecipitationProps[]>;
export const getPrecipitationsProps: GetPrecipitationsProps = async () => {
  const data = (await getDataServer()).filter(precipitationTypeAccessor);
  const { getXForDataPoint, getYForDataPoint } =
    await getCoordinatesForDataPoint();

  const precipitationRadiusScale = d3
    .scaleSqrt()
    .domain(domains.precipprob)
    .range([1, precipitationMaxRadius]);

  return data.map((d) => ({
    id: dateAccessor(d).toISOString(),
    r: precipitationRadiusScale(precipitationProbabilityAccessor(d)),
    cx: getXForDataPoint(d, precipitationOffset),
    cy: getYForDataPoint(d, precipitationOffset),
    fill: precipitationTypeScale(precipitationTypeAccessor(d)!),
  }));
};
