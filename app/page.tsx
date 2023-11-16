import { dimensions } from '@/utils/consts';

import Chart from '@/components/Chart';

import TooltipController from '@/interaction/TooltipController';
import { HighlightContextProvider } from '@/interaction/HighlightContext';

import Meta from '@/sections/Meta';
import Peripherals from '@/sections/Peripherals';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScatterPlot';
import Legend from '@/sections/Legend';

export default async function Home() {
  return (
    <main>
      <Chart
        dimensions={dimensions}
        role="img"
        aria-labelledby="sdWeatherTitle sdWeatherDescription"
        className="w-full h-full sm:w-[75vh] sm:h-[75vh]"
      >
        {/* <HighlightContextProvider> */}
        <TooltipController>
          <Meta />
          <Peripherals />
          <TopHistogram />
          <RightHistogram />
          <ScatterPlot />
          <Legend />
        </TooltipController>
        {/* </HighlightContextProvider> */}
      </Chart>
    </main>
  );
}
