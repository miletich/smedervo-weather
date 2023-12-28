import * as stylex from '@stylexjs/stylex';

import { colorScheme } from '../../../../../styles/tokens.stylex';

import { uvIndexStrokeWidth } from '../../consts';

import { getUvIndicesProps } from './utils';

export default async function UvIndex() {
  const uvIndicesProps = await getUvIndicesProps();

  return (
    <g className="uv-index">
      {uvIndicesProps.map((props, i) => (
        <line
          key={i}
          strokeWidth={uvIndexStrokeWidth}
          {...stylex.props(styles.marker)}
          {...props}
        />
      ))}
    </g>
  );
}

const styles = stylex.create({
  marker: {
    stroke: colorScheme.uvIndex,
  },
});
