import Image from 'next/image';
import { getData } from '../utils/data';
import H2 from '../components/H2';
import P from '../components/P';

export default async function Home() {
  const data = await getData();

  return <main></main>;
}
