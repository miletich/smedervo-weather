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
  windspeed: z.coerce.number(),
  winddir: z.coerce.number(),
  description: z.string(),
});

export const dataSchema = z.array(datumSchema);

export type Datum = z.infer<typeof datumSchema>;

type NumberAccessor = (d: Datum) => number;
type StringAccessor = (d: Datum) => string;
type DateAccessor = (d: Datum) => Date;
type LengthAccessor = <T extends unknown[] = unknown[]>(d: T) => number;
type PrecipitationTypeAccessor = (d: Datum) => PrecipitationType;

export const tempMinAccessor: NumberAccessor = (d) => d.tempmin;
export const tempMaxAccessor: NumberAccessor = (d) => d.tempmax;
export const dateAccessor: DateAccessor = (d) => new Date(d.datetime);
export const lengthAccessor: LengthAccessor = (d) => d.length;
export const uvIndexAccessor: NumberAccessor = (d) => d.uvindex;
export const precipitationProbabilityAccessor: NumberAccessor = (d) =>
  d.precipprob;
export const cloudCoverAccessor: NumberAccessor = (d) => d.cloudcover;
export const precipitationTypeAccessor: PrecipitationTypeAccessor = (d) =>
  d.preciptype;
export const windSpeedAccessor: NumberAccessor = (d) => d.windspeed;
export const windDirectionAccessor: NumberAccessor = (d) => d.winddir;
export const descriptionAccessor: StringAccessor = (d) => d.description;

export const isPrecipitationType = (d: any): d is PrecipitationType =>
  d === 'rain' || d === 'snow' || d === 'sleet';
