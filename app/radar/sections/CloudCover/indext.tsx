import { cloudOpacity, midGray } from '../../consts';

import { getCloudsProps } from './utilsServer';

export default async function CloudCover() {
  const clouds = await getCloudsProps();

  return (
    <g className="cloud-cover">
      {clouds.map(({ id, ...rest }) => (
        <circle key={id} {...rest} opacity={cloudOpacity} fill={midGray} />
      ))}
    </g>
  );
}
