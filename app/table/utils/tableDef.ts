import {
  dateAccessor,
  tempMinAccessor,
  type Datum,
  tempMaxAccessor,
  descriptionAccessor,
  sunriseAccessor,
  sunsetAccessor,
  uvIndexAccessor,
  precipitationTypeAccessor,
  windSpeedAccessor,
  windDirectionAccessor,
  moonPhaseAccessor,
} from '@/utils/data';

export const columns = [
  { name: 'datetime', label: 'Date', accessor: dateAccessor },
  { name: 'tempmin', label: 'Min Temp', accessor: tempMinAccessor },
  { name: 'tempmax', label: 'Max Temp', accessor: tempMaxAccessor },
  { name: 'description', label: 'Description', accessor: descriptionAccessor },
  { name: 'sunrise', label: 'Sunrise', accessor: sunriseAccessor },
  { name: 'sunset', label: 'Sunset', accessor: sunsetAccessor },
  { name: 'uvindex', label: 'UV Index', accessor: uvIndexAccessor },
  {
    name: 'preciptype',
    label: 'Precipitation',
    accessor: precipitationTypeAccessor,
  },
  { name: 'windspeed', label: 'Wind Speed', accessor: windSpeedAccessor },
  { name: 'winddir', label: 'Wind Direction', accessor: windDirectionAccessor },
  { name: 'moonphase', label: 'Moon', accessor: moonPhaseAccessor },
] as const;
