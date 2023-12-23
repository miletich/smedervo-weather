import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { TablePagerConfig, getPaginationLabels } from './utils';
import Nav from './Nav';
import Page from './Page';
import { styles } from './styles';

type Props = ComponentProps<'div'> & {
  config: TablePagerConfig;
  path: string;
  style?: StyleXStyles;
};

export default forwardRef<HTMLDivElement, Props>(function Pager(
  { style, config, path, ...rest },
  ref
) {
  const labels = getPaginationLabels(
    config.count,
    config.offset,
    config.limit,
    4
  );

  if (config.count <= config.limit) return null;

  return (
    <div
      ref={ref}
      {...rest}
      {...stylex.props([styles.wrapper, style as StyleXStyles])}
    >
      <Nav path={path} config={config}>{`<`}</Nav>
      {labels.map((label, i) => (
        // there are 2 '…'
        <Page key={`${label}-${i}`} config={config} path={path}>
          {label}
        </Page>
      ))}
      <Nav path={path} config={config}>{`>`}</Nav>
    </div>
  );
});
