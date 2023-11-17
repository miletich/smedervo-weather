import DotController from '@/controllers/DotController';
import VoronoiCell from '@/controllers/TooltipController/VoronoiCell';
import { dotSize } from '@/utils/consts';
import { getDotProps, getVoronoiCellProps } from '@/utils/lib';

export default async function ScatterPlot() {
  const dots = await getDotProps();
  const voronoiCells = await getVoronoiCellProps();
  return (
    <g className="scatter-plot">
      <g className="dots">
        {dots.map((d, i) => (
          <g key={d.id} transform={`translate(${d.cx}, ${d.cy})`}>
            <DotController i={i}>
              <circle cx={0} cy={0} r={dotSize} fill={d.fill} />
            </DotController>
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
