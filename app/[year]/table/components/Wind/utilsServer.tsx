import { windSpeedAccessor } from '@/utils/data';
import getDataServer from '@/utils/getDataServer';

type GetWindRange = () => Promise<[number, number]>;
export const getWindRange: GetWindRange = async () => {
  const data = await getDataServer();
  const windSpeeds = data.map(windSpeedAccessor);

  return [Math.min(...windSpeeds), Math.max(...windSpeeds)];
};
