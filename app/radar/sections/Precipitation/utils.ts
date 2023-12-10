import * as d3 from 'd3';

import { precipitationTypes, precipitationTypeColors } from '../../consts';

export const precipitationTypeScale = d3
  .scaleOrdinal<string>()
  .domain(precipitationTypes)
  .range(precipitationTypeColors);
