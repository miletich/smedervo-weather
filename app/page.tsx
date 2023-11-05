import { dimensions } from '@/utils/consts';
import Chart from '@/components/Chart';
import Meta from '@/sections/Meta';
import AxesAndCanvas from '@/sections/AxesAndCanvas';
import GradientLegend from '@/sections/GradientLegend';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScaterPlot';
import { CurrentDateContextProvider } from '@/interaction/CurrentDateContext';
import TooltipController from '@/interaction/TooltipController';

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
          <TooltipController>
            <Meta />
            <AxesAndCanvas />
            <TopHistogram />
            <RightHistogram />
            <ScatterPlot />
            <GradientLegend />
          </TooltipController>
        </CurrentDateContextProvider>
      </Chart>
    </main>
  );
}
