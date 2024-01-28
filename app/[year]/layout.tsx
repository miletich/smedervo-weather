import { setYear } from '@/utils/yearContext';
import { PropsWithChildren } from 'react';

export { yearGenerateStaticParams as generateStaticParams } from '@/static/yearGenerateStaticParams';

// workaround for https://github.com/vercel/next.js/issues/55574

type Props = PropsWithChildren<{
  params: {
    year: string;
  };
}>;

export default function Layout({ children, params: { year } }: Props) {
  setYear(+year);

  return <>{children}</>;
}
