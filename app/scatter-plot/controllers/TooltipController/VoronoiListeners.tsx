import { getVoronoiCellProps } from './utilsServer';
import VoronoiCell from './VoronoiCell';

export default async function MouseOverListeners() {
  const voronoiCells = await getVoronoiCellProps();

  return (
    <g className="voronoi-cells">
      {voronoiCells.map((d) => (
        <VoronoiCell key={d.datum.datetime} {...d} />
      ))}
    </g>
  );
}
