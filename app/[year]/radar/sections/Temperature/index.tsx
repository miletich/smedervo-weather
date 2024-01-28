import { temperatureGradientId } from '../../consts';

import { getTemperatureArea } from './utilsServer';

export default async function Temperature() {
  const area = await getTemperatureArea();

  return <path d={area} fill={`url(#${temperatureGradientId})`} />;
}
