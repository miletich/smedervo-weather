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
  { name: 'windspeed', label: 'Wind Speed', accessor: windSpeedAccessor },
  { name: 'winddir', label: 'Wind Direction', accessor: windDirectionAccessor },
] as const;
