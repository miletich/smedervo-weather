import * as stylex from '@stylexjs/stylex';
import { peripherals } from './tokens.stylex';

export const peripheralsStyles = stylex.create({
  gridLine: {
    stroke: peripherals.gridLineStroke,
  },
  gridLineStronger: {
    stroke: peripherals.gridLineStrokeStrong,
  },
  axisValue: {
    fill: peripherals.axisValueFill,
  },
});
