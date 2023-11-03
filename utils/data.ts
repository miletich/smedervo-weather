import path from 'path';
import { readFile } from 'fs/promises';
import * as d3 from 'd3';
import { z } from 'zod';

export const datumSchema = z.object({
  tempmin: z.coerce.number(),
  tempmax: z.coerce.number(),
  datetime: z.string(),
});

export const dataSchema = z.array(datumSchema);

export type Datum = z.infer<typeof datumSchema>;

type NumberAccessor = (d: Datum) => number;
type DateAccessor = (d: Datum) => Date;
type LengthAccessor = <T extends unknown[] = unknown[]>(d: T) => number;

export const tempMinAccessor: NumberAccessor = (d) => d.tempmin;
export const tempMaxAccessor: NumberAccessor = (d) => d.tempmax;
export const dateAccessor: DateAccessor = (d) => new Date(d.datetime);
export const lengthAccessor: LengthAccessor = (d) => d.length;

type GetData = () => Promise<Datum[]>;
export const getData: GetData = async () => {
  const csv = (
    await readFile(path.join('./public', 'sd-weather-2020.csv'))
  ).toString();
  const raw = await d3.csvParse(csv);

  return dataSchema.parse(raw);
};
