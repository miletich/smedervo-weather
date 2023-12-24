import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { illustrationStyles } from './illustrationStyles';
import { dimensions } from './consts';

type Props = ComponentProps<'rect'> & {
  styleX?: StyleXStyles;
};

export default forwardRef<SVGRectElement, Props>(function Header(
  { styleX, ...rest },
  ref
) {
  return (
    <g ref={ref} {...stylex.props(styleX)} {...rest}>
      <rect
        width={dimensions.innerWidth}
        height={dimensions.innerHeight}
        {...stylex.props(illustrationStyles.headerBG)}
      />
    </g>
  );
});
