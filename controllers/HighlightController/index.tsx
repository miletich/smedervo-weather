import { PropsWithChildren } from 'react';

import getData from '@/utils/getDataServer';
import { gradientX, gradientY } from '@/utils/consts';
import { getGradientScaleFactor } from '@/utils/scalesServer';

import { HighlightContextProvider } from '@/context/HighlightContext';
import GradientHoverListener from '@/controllers/HighlightController/GradientHoverListener';
import GradientLegend from './GradientLegend';

export default async function HighlightController({
  children,
}: PropsWithChildren) {
  const data = getData();
  const gradientScaleFactor = await getGradientScaleFactor();

  return (
    <HighlightContextProvider>
      {children}
      <GradientLegend />
      <GradientHoverListener ratio={gradientScaleFactor} />
    </HighlightContextProvider>
  );
}
