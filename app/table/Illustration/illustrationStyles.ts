import * as stylex from '@stylexjs/stylex';

import {
  // colorScheme, table,
  tableIllustration,
} from '../../../styles/tokens.stylex';

export const illustrationStyles = stylex.create({
  rowBg: (isEven: boolean) => ({
    fill: isEven
      ? tableIllustration.rowBackground
      : tableIllustration.rowBackgroundOdd,
  }),
  rowText: {
    fill: tableIllustration.text,
  },

  // headerBG: {
  //   fill: table.headerBgColor,
  // },
  // headerText: {
  //   fill: table.headerTextColor,
  // },
});
