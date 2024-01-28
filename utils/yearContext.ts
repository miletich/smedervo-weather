import { years } from '@/static/years';
import serverContext from 'server-only-context';

export const [getYear, setYear] = serverContext(years[years.length - 1]);
