import Image from 'next/image';
import { getData } from '../utils/data';
import H2 from '../components/H2';
import P from '../components/P';

export default async function Home() {
  const data = await getData();

  return (
    <header className="flex flex-col items-center">
      <H2>Daily Temperature Ranges</H2>
      <P>Daily minimum and maximum temperatures in Smederevo in 2022</P>
    </header>
  );
}
