import { dimensions } from '@/utils/consts';

import Chart from '@/components/Chart';
import Controllers from '@/controllers';
import Meta from '@/sections/Meta';
import Peripherals from '@/sections/Peripherals';
import TopHistogram from '@/sections/Histograms/TopHistogram';
import RightHistogram from '@/sections/Histograms/RightHistogram';
import ScatterPlot from '@/sections/ScatterPlot';

export default async function Home() {
  return (
    <Chart
      dimensions={dimensions}
      role="img"
      aria-labelledby="sdWeatherTitle sdWeatherDescription"
      className="w-full sm:w-[75vh] sm:h-[75vh]"
    >
      <Meta />
      <Peripherals />
      <Controllers>
        <TopHistogram />
        <RightHistogram />
        <ScatterPlot />
      </Controllers>
    </Chart>
  );
}
