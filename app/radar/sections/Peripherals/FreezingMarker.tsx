import { green } from '@/styles/colors';

import { freezingOpacity } from '../../consts';
import { getScales } from '../../utils/scalesServer';

export default async function FreezingMarker() {
  const { radiusScale } = await getScales();
  const hasFreezing = radiusScale.domain()[0] < 0;

  if (!hasFreezing) return null;

  const r = radiusScale(0);

  return <circle r={r} fill={green[400]} opacity={freezingOpacity} />;
}
