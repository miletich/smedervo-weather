import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';
import { selectedYear } from './selectedYear';

type GetDataServer = () => Promise<Datum[]>;
const getDataServer: GetDataServer = async () => {
  const year = selectedYear.getYear();
  const csv = await d3.csv(process.env.URL + `/sd-weather-${year}.csv`);

  return dataSchema.parse(csv);
};

export default getDataServer;
