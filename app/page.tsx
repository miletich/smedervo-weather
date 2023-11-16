import { dimensions } from '@/utils/consts';

import Chart from '@/components/Chart';

import HighlightController from '@/interaction/HighlightController';
import TooltipController from '@/interaction/TooltipController';

import Meta from '@/sections/Meta';
import Peripherals from '@/sections/Peripherals';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScatterPlot';
import GradientLegend from '@/sections/Legend/GradientLegend';

export default async function Home() {
  return (
    <main>
      <Chart
        dimensions={dimensions}
        role="img"
        aria-labelledby="sdWeatherTitle sdWeatherDescription"
        className="w-full h-full sm:w-[75vh] sm:h-[75vh]"
      >
        <HighlightController>
          <Meta />
          <Peripherals />
          <TooltipController>
            <TopHistogram />
            <RightHistogram />
            <ScatterPlot />
            <GradientLegend />
          </TooltipController>
        </HighlightController>
      </Chart>
    </main>
  );
}
