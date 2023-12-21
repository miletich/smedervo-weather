import { yellow } from '@/styles/tokens.stylex';

import { uvIndexStrokeWidth } from '../../consts';

import { getUvIndicesProps } from './utils';

export default async function UvIndex() {
  const uvIndicesProps = await getUvIndicesProps();

  return (
    <g className="uv-index">
      {uvIndicesProps.map((props, i) => (
        <line
          key={i}
          stroke={yellow[300]}
          strokeWidth={uvIndexStrokeWidth}
          {...props}
        />
      ))}
    </g>
  );
}
