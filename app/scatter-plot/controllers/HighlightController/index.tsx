import { PropsWithChildren } from 'react';

import getData from '@/utils/getDataServer';

import { gradientX, gradientY } from '../../consts';
import { HighlightContextProvider } from '../../context/HighlightContext';
import { getGradientScaleFactor } from '../../utils/scalesServer';

import GradientLegend from './GradientLegend';
import GradientHoverListener from './GradientHoverListener';

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
