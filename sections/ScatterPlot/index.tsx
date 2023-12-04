import VoronoiCell from '@/controllers/TooltipController/VoronoiCell';
import { dotSize } from '@/utils/consts';
import { getVoronoiCellProps } from '@/utils/lib';

import { getDotProps } from './utilsServer';
import ActiveDotWrapper from './ActiveDotWrapper';

export default async function ScatterPlot() {
  const dots = await getDotProps();
  const voronoiCells = await getVoronoiCellProps();
  return (
    <g className="scatter-plot">
      <g className="dots">
        {dots.map((d, i) => (
          <g key={d.id} transform={`translate(${d.cx}, ${d.cy})`}>
            <ActiveDotWrapper i={i}>
              <circle cx={0} cy={0} r={dotSize} fill={d.fill} />
            </ActiveDotWrapper>
          </g>
        ))}
      </g>
      <g className="voronoi">
        {voronoiCells.map((d) => (
          <VoronoiCell key={d.datum.datetime} {...d} />
        ))}
      </g>
    </g>
  );
}
