import { color } from 'd3';
import {
  uvIndexBarHeight,
  uvIndexBarPadding,
  uvIndexBarWidth,
} from '../../consts';

export type UvIndexName = 'low' | 'moderate' | 'high' | 'very high' | 'extreme';

export type UvIndexThreshold = {
  name: UvIndexName;
  minValue: number;
};
export const uvIndexThresholds: UvIndexThreshold[] = [
  {
    name: 'low',
    minValue: 0,
  },
  {
    name: 'moderate',
    minValue: 3,
  },
  {
    name: 'high',
    minValue: 6,
  },
  {
    name: 'very high',
    minValue: 8,
  },
  {
    name: 'extreme',
    minValue: 11,
  },
];

export type UvIndexColorScheme = Record<UvIndexName, string>;
export const uvIndexColorScheme: UvIndexColorScheme = {
  low: '#05cf79',
  moderate: '#ffdf33',
  high: '#fca63d',
  ['very high']: '#fb1052',
  extreme: '#7d0199',
};

type GetUvIndexName = (value: number) => UvIndexName;
export const getUvIndexName: GetUvIndexName = (value) =>
  uvIndexThresholds
    .concat()
    .reverse()
    .find((d) => d.minValue <= value)!.name;

type GetUvIndexColor = (value: number) => string;
export const getUvIndexColor: GetUvIndexColor = (value) =>
  uvIndexColorScheme[getUvIndexName(value)];

type GetUvIndexFullWidth = (value: number) => number;
export const getUvIndexFullWidth: GetUvIndexFullWidth = (value) =>
  (uvIndexBarWidth + uvIndexBarPadding) * value - uvIndexBarPadding;

type UvIndexConfig = {
  name: UvIndexName;
  value: number;
  color: string;
  width: number;
  height: number;
  barXBase: number;
};
type GetUvIndexConfig = (value: number) => UvIndexConfig;
export const getUvIndexConfig: GetUvIndexConfig = (value) => ({
  name: getUvIndexName(value),
  value,
  color: getUvIndexColor(value),
  width: getUvIndexFullWidth(value),
  height: uvIndexBarHeight,
  barXBase: uvIndexBarWidth + uvIndexBarPadding,
});
