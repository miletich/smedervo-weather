import { PropsWithChildren } from 'react';

import { getData } from '@/utils/lib';
import { gradientX, gradientY } from '@/utils/consts';
import { getGradientScaleFactor } from '@/utils/scales';

import { HighlightContextProvider } from '@/context/HighlightContext';
import GradientHoverListener from '@/controllers/HighlightController/GradientHoverListener';

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
