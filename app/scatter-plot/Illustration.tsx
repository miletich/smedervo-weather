import Chart from '@/components/Chart';
import { dimensions } from './consts';
import Meta from './sections/Meta';
import Peripherals from './sections/Peripherals';
import TopHistogram from './sections/Histograms/TopHistogram';
import RightHistogram from './sections/Histograms/RightHistogram';
import ScatterPlot from './sections/ScatterPlot';

export default function ScatterPlotIllustration() {
  return (
    <Chart
      dimensions={dimensions}
      role="img"
      aria-labelledby="sdWeatherTitle sdWeatherDescription"
    >
      <Meta />
      <Peripherals />
      <TopHistogram />
      <RightHistogram />
      <ScatterPlot />
    </Chart>
  );
}
