import {
  annotationAngleCloud,
  annotationInnerOffsetTemperature,
  annotationOuterOffset,
  annotationAnglePrecipitation,
  annotationAngleTemperature,
  annotationUvAngleIndex,
  cloudOffset,
  precipitationOffset,
  uvIndexOffsetInner,
  uvIndexOffsetOuter,
  annotationAngleFreezing,
  dimensions,
} from '../../consts';
import { getScales } from '../../utils/scalesServer';

import Annotation from './Annotation';
import PrecipitationTypes from './PrecipitationTypes';

export default async function Annotations() {
  const { radiusScale } = await getScales();

  return (
    <g className="annotations">
      <Annotation
        angle={annotationAngleFreezing}
        innerOffset={radiusScale(0) / dimensions.radius}
        outerOffset={annotationOuterOffset}
      >
        Freezing Temperatures
      </Annotation>
      <Annotation
        angle={annotationAngleTemperature}
        innerOffset={annotationInnerOffsetTemperature}
        outerOffset={annotationOuterOffset}
      >
        Temperature
      </Annotation>
      <Annotation
        angle={annotationAngleCloud}
        innerOffset={cloudOffset}
        outerOffset={annotationOuterOffset}
      >
        Clout Cover
      </Annotation>
      <Annotation
        angle={annotationAnglePrecipitation}
        innerOffset={precipitationOffset}
        outerOffset={annotationOuterOffset}
      >
        Precipitation
      </Annotation>
      <PrecipitationTypes />
      <Annotation
        angle={annotationUvAngleIndex}
        innerOffset={(uvIndexOffsetInner + uvIndexOffsetOuter) / 2}
        outerOffset={annotationOuterOffset}
      >
        UV Index Over 8
      </Annotation>
    </g>
  );
}
