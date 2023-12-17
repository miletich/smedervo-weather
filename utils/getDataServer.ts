import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';

type GetDataServer = () => Promise<Datum[]>;
const getDataServer: GetDataServer = async () => {
  const isLocal = process.env.NODE_ENV === 'development';
  const urlPrefix = isLocal ? '' : 'https://';
  const url = urlPrefix + process.env.URL;
  const csv = await d3.csv(url + '/sd-weather-2022.csv');

  return dataSchema.parse(csv);
};

export default getDataServer;
