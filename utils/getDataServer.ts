import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';
import { years } from '@/static/years';

type GetDataServer = (year?: number) => Promise<Datum[]>;
const getDataServer: GetDataServer = async (year = years[years.length - 1]) => {
  const csv = await d3.csv(process.env.URL + `/sd-weather-${year}.csv`);

  return dataSchema.parse(csv);
};

export default getDataServer;
