import Image from 'next/image';
import { getData } from './data';

export default async function Home() {
  const data = await getData();

  return null;
}
