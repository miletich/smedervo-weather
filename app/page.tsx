import { dimensions } from '@/utils/consts';
import Chart from '@/components/Chart';
import Meta from '@/sections/Meta';
import Peripherals from '@/sections/Peripherals';
import GradientLegend from '@/sections/GradientLegend';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScatterPlot';
import { CurrentDateContextProvider } from '@/interaction/CurrentDateContext';
import TooltipController from '@/interaction/TooltipController';
import { HighlightContextProvider } from '@/interaction/HighlightContext';

export default async function Home() {
  return (
    <main>
      <Chart
        dimensions={dimensions}
        role="img"
        aria-labelledby="sdWeatherTitle sdWeatherDescription"
        className="w-full h-full sm:w-[75vh] sm:h-[75vh]"
      >
        <CurrentDateContextProvider>
          <HighlightContextProvider>
            <TooltipController>
              <Meta />
              <Peripherals />
              <TopHistogram />
              <RightHistogram />
              <ScatterPlot />
              <GradientLegend />
            </TooltipController>
          </HighlightContextProvider>
        </CurrentDateContextProvider>
      </Chart>
    </main>
  );
}
