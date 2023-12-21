import { UvIndexName } from '@/app/table/components/UvIndex/utils';

export const yellow = '#feca57';
// freezing
export const green = '#00d2d3';

export const daylightDayColor = '#ffed9e';

export type UvIndexColorScheme = Record<UvIndexName, string>;
export const uvIndexColorScheme: UvIndexColorScheme = {
  low: '#05cf79',
  moderate: '#ffdf33',
  high: '#fca63d',
  ['very high']: '#fb1052',
  extreme: '#7d0199',
};

export const white = '#fff';
export const zinc = {
  // 50: '#fafafa',
  // 100: '#f4f4f5',
  // 200: '#e4e4e7',
  // 300: '#d4d4d8',
  // 400: '#a1a1aa',
  // 500: '#71717a',
  // 600: '#52525b',
  // 700: '#3f3f46',
  // 800: '#27272a',
  // 900: '#18181b',
  // 950: '#09090b',

  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
};

export const blue = {
  // 50: '#f0f9ff',
  // 100: '#e0f2fe',
  // 200: '#bae6fd',
  // 300: '#7dd3fc',
  // 400: '#38bdf8',
  // 500: '#0ea5e9',
  // 600: '#0284c7',
  // 700: '#0369a1',
  // 800: '#075985',
  // 900: '#0c4a6e',
  // 950: '#082f49 ',

  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
};
