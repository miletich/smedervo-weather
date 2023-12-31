import * as stylex from '@stylexjs/stylex';

import { peripheralsStyles } from '@/styles/peripherals';

import {
  annotationAnglePrecipitation,
  annotationOuterOffset,
  annotationTextSize,
  precipitationTypeAnnotationR,
  precipitationTypeCircleOpacity,
  precipitationTypeCircleXOffset,
  precipitationTypeLabelXOffset,
  precipitationTypeYOffsetBase,
  precipitationTypes,
} from '../../consts';
import { getCoordinatesForAngle } from '../../utils/angle';
import { precipitationTypeScale } from '../Precipitation/utils';

export default async function PrecipitationTypes() {
  return precipitationTypes.map((d, i) => {
    const [x, y] = getCoordinatesForAngle(
      annotationAnglePrecipitation,
      annotationOuterOffset
    );

    return (
      <>
        <circle
          r={precipitationTypeAnnotationR}
          cx={x + precipitationTypeCircleXOffset}
          cy={y + (i + 1) * precipitationTypeYOffsetBase}
          fill={precipitationTypeScale(d)}
          opacity={precipitationTypeCircleOpacity}
        />
        <text
          x={x + precipitationTypeLabelXOffset}
          y={y + (i + 1) * precipitationTypeYOffsetBase}
          fontSize={annotationTextSize}
          dominantBaseline="middle"
          {...stylex.props(peripheralsStyles.axisValue)}
        >
          {d}
        </text>
      </>
    );
  });
}
