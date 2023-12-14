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
  { id: 'datetime', label: 'Date', accessor: dateAccessor },
  { id: 'tempMin', label: 'Min Temp', accessor: tempMinAccessor },
  { id: 'tempMax', label: 'Max Temp', accessor: tempMaxAccessor },
  { id: 'description', label: 'Description', accessor: descriptionAccessor },
  { id: 'sunrise', label: 'Sunrise', accessor: sunriseAccessor },
  { id: 'sunset', label: 'Sunset', accessor: sunsetAccessor },
  { id: 'uvindex', label: 'UV Index', accessor: uvIndexAccessor },
  {
    id: 'preciptype',
    label: 'Precipitation',
    accessor: precipitationTypeAccessor,
  },
  { id: 'windspeed', label: 'Wind Speed', accessor: windSpeedAccessor },
  { id: 'winddir', label: 'Wind Direction', accessor: windDirectionAccessor },
  { id: 'moonphase', label: 'Moon', accessor: moonPhaseAccessor },
] as const;
