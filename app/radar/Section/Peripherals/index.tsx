import { tickColor } from '../../consts';

import { getTicksProps } from './utilsServer';

export default async function Peripherals() {
  const ticksProps = await getTicksProps();

  return (
    <g className="peripherals">
      {ticksProps.map(({ id, ...rest }) => (
        <line key={id} {...rest} stroke={tickColor} />
      ))}
    </g>
  );
}
