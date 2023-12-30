import { years } from '@/static/years';
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect(`/${years[years.length - 1]}`);

  return null;
}
