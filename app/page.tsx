import { selectedYear } from '@/utils/selectedYear';
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect(`/${selectedYear.getYear()}`);

  return null;
}
