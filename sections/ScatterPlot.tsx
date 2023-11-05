import VoronoiCell from '@/interaction/VoronoiCell';
import { dotSize } from '@/utils/consts';
import { getDotProps, getVoronoiCellProps } from '@/utils/lib';

export default async function ScatterPlot() {
  const dots = await getDotProps();
  const voronoiCells = await getVoronoiCellProps();
  return (
    <g className="scatter-plot">
      <g className="dots">
        {dots.map((d, i) => (
          <circle key={`${d.cx}-${d.cy}-${i}`} r={dotSize} {...d} />
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
