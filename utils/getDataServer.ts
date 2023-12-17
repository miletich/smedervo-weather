import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';

type GetDataServer = () => Promise<Datum[]>;
const getDataServer: GetDataServer = async () => {
  const csv = await d3.csv(process.env.URL + '/sd-weather-2022.csv');

  return dataSchema.parse(csv);
};

export default getDataServer;
