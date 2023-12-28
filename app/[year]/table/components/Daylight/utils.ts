import * as SunCalc from 'suncalc';
import { scaleTime } from 'd3-scale';

import { daylightWidth, location } from '../../consts';

type DaylightConfig = Record<'dawn' | 'sunrise' | 'sunset' | 'dusk', number>;

type GetDaylightConfig = (date: Date) => DaylightConfig;
export const getDaylightConfig: GetDaylightConfig = (date) => {
  const { dawn, sunrise, sunset, dusk } = SunCalc.getTimes(date, ...location);
  const scale = scaleTime()
    .domain([
      new Date(date).setHours(0, 0, 0, 0),
      new Date(date).setHours(24, 0, 0, 0),
    ])
    .range([0, daylightWidth]);

  return {
    dawn: scale(dawn),
    sunrise: scale(sunrise),
    sunset: scale(sunset),
    dusk: scale(dusk),
  };
};
