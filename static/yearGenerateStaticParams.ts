import { years } from '@/static/years';

export const yearGenerateStaticParams = () =>
  years.map((year) => ({ year: String(year) }));
