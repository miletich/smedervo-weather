import path from 'path';
import { readFile } from 'fs/promises';
import * as d3 from 'd3';

import { type Datum, dataSchema } from './data';

type GetDataServer = () => Promise<Datum[]>;
const getDataServer: GetDataServer = async () => {
  const csv = (
    await readFile(path.join('./public', 'sd-weather-2020.csv'))
  ).toString();
  const raw = await d3.csvParse(csv);

  return dataSchema.parse(raw);
};

export default getDataServer;
