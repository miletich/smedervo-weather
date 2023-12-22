import * as stylex from '@stylexjs/stylex';

import Chart from '@/components/Chart';
import { sizing } from '../../styles/tokens.stylex';

import { dimensions } from './consts';
import Controllers from './controllers';
import Meta from './sections/Meta';
import Peripherals from './sections/Peripherals';
import TopHistogram from './sections/Histograms/TopHistogram';
import RightHistogram from './sections/Histograms/RightHistogram';
import ScatterPlot from './sections/ScatterPlot';

export default async function WeatherScatterPlot() {
  return (
    <Chart
      dimensions={dimensions}
      role="img"
      aria-labelledby="sdWeatherTitle sdWeatherDescription"
      {...stylex.props(styles.wrapper)}
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

const styles = stylex.create({
  wrapper: {
    width: sizing.radarWidth,
    height: sizing.radarHeight,
  },
});
