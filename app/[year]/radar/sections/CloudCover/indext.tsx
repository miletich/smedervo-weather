import * as stylex from '@stylexjs/stylex';

import { colorScheme } from '../../../../../styles/tokens.stylex';

import { cloudOpacity } from '../../consts';

import { getCloudsProps } from './utilsServer';

export default async function CloudCover() {
  const clouds = await getCloudsProps();

  return (
    <g className="cloud-cover">
      {clouds.map(({ id, ...rest }) => (
        <circle
          key={id}
          opacity={cloudOpacity}
          {...stylex.props(styles.cloud)}
          {...rest}
        />
      ))}
    </g>
  );
}

const styles = stylex.create({
  cloud: {
    fill: colorScheme.cloud,
  },
});
