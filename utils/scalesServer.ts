import { gradientWidth } from './consts';
import { getData } from './lib';
import genScales, { type Scales } from './genScales';

type GetScales = () => Promise<Scales>;
export const getScales: GetScales = async () => {
  const data = await getData();
  return genScales(data);
};

type GetGradientScaleFactor = () => Promise<number>;
export const getGradientScaleFactor: GetGradientScaleFactor = async () => {
  const data = await getData();

  return data.length / gradientWidth;
};
