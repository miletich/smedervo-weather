import { dimensions } from '@/utils/consts';
import Chart from '@/components/Chart';
import Meta from '@/sections/Meta';
import AxesAndCanvas from '@/sections/AxesAndCanvas';
import GradientLegend from '@/sections/GradientLegend';
import TopHistogram from '@/sections/TopHistogram';
import RightHistogram from '@/sections/RightHistogram';
import ScatterPlot from '@/sections/ScaterPlot';
import { CurrentDateContextProvider } from '@/interaction/CurrentDateContext';
import MouseLeaveController from '@/interaction/MouseLeaveController';
import DotHighlight from '@/interaction/DotHighlight';

export default async function Home() {
  return (
    <main>
      <CurrentDateContextProvider>
        <Chart
          dimensions={dimensions}
          role="img"
          aria-labelledby="sdWeatherTitle sdWeatherDescription"
          className="w-[75vw] h-[75vh]"
        >
          <MouseLeaveController>
            <Meta />
            <AxesAndCanvas />
            <TopHistogram />
            <RightHistogram />
            <ScatterPlot />
            <DotHighlight />
            <GradientLegend />
          </MouseLeaveController>
        </Chart>
      </CurrentDateContextProvider>
    </main>
  );
}
