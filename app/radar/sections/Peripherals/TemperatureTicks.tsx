import { Fragment } from 'react';

import { gray } from '@/styles/colors';

import { getTemperatureTickProps } from './utilsServer';
import TemperatureLabel from './TemperatureLabel';

type Props = { hideLabels?: boolean };
export default async function TemperatureTicks({ hideLabels = false }: Props) {
  const temperatureTicks = await getTemperatureTickProps();

  return temperatureTicks.map(({ label, r }) => (
    <Fragment key={label}>
      <circle r={r} fill="none" stroke={gray[200]} />
      {!hideLabels && +label >= 0 && <TemperatureLabel y={-r} label={label} />}
    </Fragment>
  ));
}
