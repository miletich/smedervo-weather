import * as stylex from '@stylexjs/stylex';

import { table } from '../../../styles/tokens.stylex';
import { CSSProperties } from 'react';

const itemDefaults: CSSProperties = {
  width: '2.25rem',
  height: '2.25rem',
  padding: '0.5rem',
  textAlign: 'center',
};

export const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
    lineHeight: 1.25,
    color: table.pagerTextColor,
  },
  item: {
    ...itemDefaults,
    borderRadius: {
      default: 0,
      ':hover': '0.5rem',
    },
    fontWeight: {
      default: 'auto',
      ':hover': 600,
    },
    color: {
      default: table.pagerTextColor,
      ':hover': table.pagerTextColor,
    },
    backgroundColor: {
      default: 'none',
      ':hover': table.pagerHoverBg,
    },
  },
  disabledItem: {
    ...itemDefaults,
    pointerEvents: {
      default: 'auto',
      ':disabled': 'none',
    },
  },
  currentItem: {
    fontWeight: 700,
  },
});
