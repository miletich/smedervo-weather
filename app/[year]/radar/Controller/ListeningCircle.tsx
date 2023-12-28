import { memo } from 'react';

import { dimensions } from '../consts';

import {
  type SetCoordinates,
  onMouseLeave,
  onMouseMove,
} from './eventHandlers';

type Props = {
  setCoordinates: SetCoordinates;
};

function ListeningCircle({ setCoordinates }: Props) {
  const handleMouseMove = onMouseMove(setCoordinates);
  const handleMouseLeave = onMouseLeave(setCoordinates);

  return (
    <circle
      r={dimensions.size / 2}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      fill="transparent"
    />
  );
}
export default memo(ListeningCircle);
