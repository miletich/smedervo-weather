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
