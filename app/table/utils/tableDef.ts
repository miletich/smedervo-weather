import {
  dateAccessor,
  tempMinAccessor,
  type Datum,
  tempMaxAccessor,
  descriptionAccessor,
  uvIndexAccessor,
  precipitationTypeAccessor,
  windSpeedAccessor,
  windDirectionAccessor,
} from '@/utils/data';

export const columns = [
  { name: 'datetime', label: 'Date', accessor: dateAccessor },
  { name: 'tempmin', label: 'Min Temp', accessor: tempMinAccessor },
  { name: 'tempmax', label: 'Max Temp', accessor: tempMaxAccessor },
  { name: 'description', label: 'Description', accessor: descriptionAccessor },
  { name: 'daylight', label: 'Daylight', accessor: dateAccessor },
  { name: 'uvindex', label: 'UV Index', accessor: uvIndexAccessor },
  {
    name: 'preciptype',
    label: 'Precipitation',
    accessor: precipitationTypeAccessor,
  },
  { name: 'windspeed', label: 'Wind Speed', accessor: windSpeedAccessor },
  { name: 'winddir', label: 'Wind Direction', accessor: windDirectionAccessor },
  { name: 'moonphase', label: 'Moon', accessor: dateAccessor },
] as const;
