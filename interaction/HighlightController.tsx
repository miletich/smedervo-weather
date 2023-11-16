import { getData } from '@/utils/lib';
import { gradientX, gradientY } from '@/utils/consts';

import { HighlightContextProvider } from './HighlightContext';
import { PropsWithChildren } from 'react';
import GradientHoverListener from '@/sections/Legend/GradientHoverListener';
import { getGradientScaleFactor } from '@/utils/scales';

export default async function HighlightController({
  children,
}: PropsWithChildren) {
  const data = getData();
  const gradientScaleFactor = await getGradientScaleFactor();

  return (
    <HighlightContextProvider>
      {children}

      <GradientHoverListener ratio={gradientScaleFactor} />
    </HighlightContextProvider>
  );
}
