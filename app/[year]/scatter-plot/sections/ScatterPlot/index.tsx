import { dotSize } from '../../consts';

import { getDotProps } from './utilsServer';
import ActiveDotWrapper from './ActiveDotWrapper';

export default async function ScatterPlot() {
  const dots = await getDotProps();
  return (
    <g className="dots">
      {dots.map((d, i) => (
        <g key={d.id} transform={`translate(${d.cx}, ${d.cy})`}>
          <ActiveDotWrapper i={i}>
            <circle cx={0} cy={0} r={dotSize} fill={d.fill} />
          </ActiveDotWrapper>
        </g>
      ))}
    </g>
  );
}
