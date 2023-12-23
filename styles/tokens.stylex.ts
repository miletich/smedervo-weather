import * as stylex from '@stylexjs/stylex';

// media queries
export const SM = '@media (min-width: 640px)';
export const MD = '@media (min-width: 768px)';
export const LG = '@media (min-width: 1024px)';
export const XL = '@media (min-width: 1280px)';
export const XXL = '@media (min-width: 1536px)';

export const DARK = '@media (prefers-color-scheme: dark)';

// tailwind colors

export const white = '#fff';

export const gray = {
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

export const yellow = {
  // 50: '#fefce8',
  // 100: '#fef9c3',
  // 200: '#fef08a',
  // 300: '#fde047',
  // 400: '#facc15',
  // 500: '#eab308',
  // 600: '#ca8a04',
  // 700: '#a16207',
  // 800: '#854d0e',
  // 900: '#713f12',
  // 950: '#422006',
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
};

export const green = {
  // 50: '#ecfdf5',
  // 100: '#d1fae5',
  // 200: '#a7f3d0',
  // 300: '#6ee7b7',
  // 400: '#34d399',
  // 500: '#10b981',
  // 600: '#059669',
  // 700: '#047857',
  // 800: '#065f46',
  // 900: '#064e3b',
  // 950: '#022c22',
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  950: '#042f2e',
};

export const red = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
};

export const purple = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
};

export const colorScheme = stylex.defineVars({
  bodyBackground: {
    default: `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
    [DARK]: `linear-gradient(to bottom, ${gray[950]}, ${gray[900]})`,
  },
  wipBackground: {
    default: gray[200],
  },
  text: {
    default: gray[500],
    [DARK]: gray[400],
  },
  lightText: {
    default: gray[500],
  },
  loaderColor: {
    default: purple[900],
    [DARK]: purple[300],
  },
  cloud: {
    default: gray[300],
    [DARK]: gray[500],
  },
  uvIndex: {
    default: yellow[300],
    [DARK]: yellow[400],
  },
  histogram: {
    default: gray[300],
    [DARK]: gray[600],
  },
});

export const sizing = stylex.defineVars({
  radarWidth: {
    default: '100%',
    [SM]: '75vw',
  },
  radarHeight: {
    default: 'auto',
    [SM]: '75vh',
  },
  h2Size: '1.5rem',
});

export const tooltip = stylex.defineVars({
  defaultFill: {
    default: gray[600],
    [DARK]: gray[400],
  },
  wrapperStroke: {
    default: gray[300],
    [DARK]: gray[700],
  },
  wrapperFill: {
    default: white,
    [DARK]: gray[950],
  },
  arcFill: {
    default: gray[800],
    [DARK]: gray[100],
  },
  arcBlendMode: {
    default: 'multiply',
    [DARK]: 'lighten',
  },
  circleStroke: {
    default: gray[800],
    [DARK]: gray[200],
  },
});

export const peripherals = stylex.defineVars({
  bgFill: {
    default: gray[50],
    [DARK]: gray[900],
  },
  gridLineStroke: {
    default: gray[300],
    [DARK]: gray[700],
  },
  gridLineStrokeStrong: {
    default: gray[500],
    [DARK]: gray[600],
  },
  axisValueFill: {
    default: gray[400],
    [DARK]: gray[600],
  },
  hoverLineBlendMode: {
    default: 'color-burn',
    [DARK]: 'darken',
  },
  hoverLineFill: {
    default: blue[300],
    [DARK]: blue[950],
  },
});

export const table = stylex.defineVars({
  pagerTextColor: {
    default: blue[800],
    [DARK]: blue[200],
  },
  pagerHoverBg: {
    default: blue[100],
    [DARK]: blue[900],
  },
  pagerHoverText: {
    default: blue[600],
    [DARK]: blue[400],
  },
});
