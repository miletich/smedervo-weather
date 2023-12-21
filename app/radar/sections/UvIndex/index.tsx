import { yellow } from '@/consts/colors';

import { uvIndexStrokeWidth } from '../../consts';

import { getUvIndicesProps } from './utils';

export default async function UvIndex() {
  const uvIndicesProps = await getUvIndicesProps();

  return (
    <g className="uv-index">
      {uvIndicesProps.map((props, i) => (
        <line
          key={i}
          stroke={yellow}
          strokeWidth={uvIndexStrokeWidth}
          {...props}
        />
      ))}
    </g>
  );
}
