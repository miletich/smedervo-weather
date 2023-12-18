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

export const columns = [
  {
    name: 'datetime',
    label: 'Date',
    accessor: dateAccessor,
    className: 'text-start w-[96px]',
  },
  {
    name: 'description',
    label: 'Description',
    accessor: descriptionAccessor,
    className: 'text-start w-[680px]',
  },
  {
    name: 'preciptype',
    label: 'Precip',
    accessor: precipitationTypeAccessor,
    className: 'pe-4 w-[82px]',
  },
  {
    name: 'tempmax',
    label: 'Max Temp',
    accessor: tempMaxAccessor,
    className: 'w-[114px]',
  },
  {
    name: 'daylight',
    label: 'Daylight',
    accessor: dateAccessor,
    className: 'ps-6',
  },
  {
    name: 'moonphase',
    label: 'Moon',
    accessor: dateAccessor,
    className: 'pe-6 w-[86px]',
  },
  {
    name: 'wind',
    label: 'Wind',
    accessor: windAccessor,
    className: 'w-[114px]',
  },
  {
    name: 'uvindex',
    label: 'UV Index',
    accessor: uvIndexAccessor,
    className: 'text-start ps-6',
  },
] as const;
