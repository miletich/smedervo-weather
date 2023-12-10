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

const precipitationTypes = ['rain', 'sleet', 'snow'];
const precipitationTypeColors = ['#54a0ff', '#636e72', '#b2bec3'];

type PrecipitationProps = Record<'r' | 'cx' | 'cy', number> &
  Record<'id' | 'fill', string>;
type GetPrecipitationsProps = () => Promise<PrecipitationProps[]>;
export const getPrecipitationsProps: GetPrecipitationsProps = async () => {
  const data = (await getDataServer()).filter(precipitationTypeAccessor);
  const { getXForDataPoint, getYForDataPoint } =
    await getCoordinatesForDataPoint();

  const precipitationTypeScale = d3
    .scaleOrdinal<string>()
    .domain(precipitationTypes)
    .range(precipitationTypeColors);

  const precipitationRadiusScale = d3
    .scaleSqrt()
    .domain(<[number, number]>d3.extent(data, precipitationProbabilityAccessor))
    .range([1, precipitationMaxRadius]);

  return data.map((d) => ({
    id: dateAccessor(d).toISOString(),
    r: precipitationRadiusScale(precipitationProbabilityAccessor(d)),
    cx: getXForDataPoint(d, precipitationOffset),
    cy: getYForDataPoint(d, precipitationOffset),
    fill: precipitationTypeScale(precipitationTypeAccessor(d)!),
  }));
};