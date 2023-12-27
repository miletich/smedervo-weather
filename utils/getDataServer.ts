import { readFile } from 'fs/promises';
import { unstable_cache } from 'next/cache';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';

type GetDataServer = () => Promise<Datum[]>;
const getDataServer: GetDataServer = async () => {
  const csv = await d3.csv(process.env.URL + '/sd-weather-2022.csv');

  return dataSchema.parse(csv);
};

const getCachedData: GetDataServer = unstable_cache(
  async () => getDataServer(),
  ['weather-data']
);

export default getDataServer;
