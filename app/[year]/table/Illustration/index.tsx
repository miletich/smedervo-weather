import Chart from '@/components/Chart';
import { dateAccessor } from '@/utils/data';

import { dimensions } from './consts';
import Meta from './Meta';
import { mockData } from './mockData';
import Row from './Row';
// import Header from './Header';

export default function TableIllustration() {
  return (
    <Chart dimensions={dimensions} role="img">
      <Meta />
      {/* <Header /> */}
      {mockData.map((d, i) => (
        <Row
          key={d.datetime}
          idx={i}
          date={new Date(d.datetime)}
          uvIndex={d.uvindex}
        />
      ))}
    </Chart>
  );
}
