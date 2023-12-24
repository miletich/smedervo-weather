import * as stylex from '@stylexjs/stylex';

import { table } from '../../styles/tokens.stylex';

export const tableStyles = stylex.create({
  wrapper: {
    borderCollapse: 'collapse',
  },
  header: {
    color: table.headerTextColor,
  },
  headerRow: {
    backgroundColor: table.headerBgColor,
  },
  rowBackground: {
    backgroundColor: {
      default: table.rowBackground,
      ':nth-child(odd)': table.rowBackgroundOdd,
      ':hover': table.rowBackgroundHover,
    },
  },
  cell: {
    padding: '1rem',
    height: '100%',
  },
});
