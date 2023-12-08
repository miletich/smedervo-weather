import { z } from 'zod';

export const precipitationTypeSchema = z.preprocess(
  (val) => (val === '' ? undefined : val === 'rain,snow' ? 'sleet' : val),
  z.union([
    z.literal('rain'),
    z.literal('snow'),
    z.literal('sleet'),
    z.undefined(),
  ])
);

export type PrecipitationType = z.infer<typeof precipitationTypeSchema>;

export const datumSchema = z.object({
  tempmin: z.coerce.number(),
  tempmax: z.coerce.number(),
  datetime: z.string(),
  uvindex: z.coerce.number(),
  precipprob: z.coerce.number(),
  preciptype: precipitationTypeSchema,
  cloudcover: z.coerce.number(),
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
