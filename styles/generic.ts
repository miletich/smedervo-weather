import * as stylex from '@stylexjs/stylex';
import { colorScheme } from './tokens.stylex';

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
  headerHover: {
    color: {
      default: colorScheme.text,
      ':hover': colorScheme.textHeaderHover,
    },
  },
  headerActive: {
    color: colorScheme.textHeaderActive,
  },
});
