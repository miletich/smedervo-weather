import Chart from '@/components/Chart';
import { dimensions } from '../consts';
import Meta from '../sections/Meta';
import TopHistogram from '../sections/Histograms/TopHistogram';
import RightHistogram from '../sections/Histograms/RightHistogram';
import ScatterPlot from '../sections/ScatterPlot';
import IllustrationPeripherals from './IllustrationPeripherals';

export default function ScatterPlotIllustration() {
  return (
    <Chart
      dimensions={dimensions}
      role="img"
      aria-labelledby="sdWeatherTitle sdWeatherDescription"
    >
      <Meta />
      <IllustrationPeripherals />
      <TopHistogram />
      <RightHistogram />
      <ScatterPlot />
    </Chart>
  );
}
