import { precipitationOpacity } from '../../consts';

import { getPrecipitationsProps } from './utilsServer';

export default async function Precipitation() {
  const precipitations = await getPrecipitationsProps();

  return (
    <g className="precipitation">
      {precipitations.map(({ id, ...rest }) => (
        <circle key={id} {...rest} opacity={precipitationOpacity} />
      ))}
    </g>
  );
}
