import { dimensions } from '@/utils/consts';

import Chart from '@/components/Chart';

import HighlightController from '@/controllers/HighlightController';
import GradientLegend from '@/controllers/HighlightController/GradientLegend';
import TooltipController from '@/controllers/TooltipController';

import Meta from '@/sections/Meta';
import Peripherals from '@/sections/Peripherals';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScatterPlot';

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
          <TooltipController>
            <Meta />
            <Peripherals />
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
