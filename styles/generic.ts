import * as stylex from '@stylexjs/stylex';

export const generic = stylex.create({
  centerXY: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  noPointerEvents: {
    pointerEvents: 'none',
  },
});
