import { type ComponentProps, forwardRef } from 'react';
import { TablePagerConfig, getPaginationLabels } from './utils';
import Nav from './Nav';
import Page from './Page';

type Props = ComponentProps<'div'> & { config: TablePagerConfig; path: string };

export default forwardRef<HTMLDivElement, Props>(function Pager(
  { className = '', config, path, ...rest },
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
    <div ref={ref} className={`flex justify-center ${className}`} {...rest}>
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
