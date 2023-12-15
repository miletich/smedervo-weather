import {
  type Datum,
  dateAccessor,
  tempMaxAccessor,
  descriptionAccessor,
  uvIndexAccessor,
  precipitationTypeAccessor,
  windSpeedAccessor,
  windDirectionAccessor,
} from '@/utils/data';

export type Wind = Record<'windspeed' | 'winddir', number>;

type WindAccessor = (d: Datum) => Wind;
const windAccessor: WindAccessor = (d) => ({
  windspeed: windSpeedAccessor(d),
  winddir: windDirectionAccessor(d),
});

export const isWindGuard = (d: any): d is Wind =>
  typeof d === 'object' && 'windspeed' in d && 'winddir' in d;

export const columns = [
  { name: 'datetime', label: 'Date', accessor: dateAccessor },
  { name: 'description', label: 'Description', accessor: descriptionAccessor },
  { name: 'tempmax', label: 'Max Temp', accessor: tempMaxAccessor },
  { name: 'daylight', label: 'Daylight', accessor: dateAccessor },
  { name: 'uvindex', label: 'UV Index', accessor: uvIndexAccessor },
  { name: 'moonphase', label: 'Moon', accessor: dateAccessor },
  {
    name: 'preciptype',
    label: 'Precipitation',
    accessor: precipitationTypeAccessor,
  },
  { name: 'wind', label: 'Wind', accessor: windAccessor },
] as const;
