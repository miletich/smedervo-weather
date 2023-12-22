import * as stylex from '@stylexjs/stylex';

import { gray, white } from '@/styles/tokens.stylex';
import {
  temperatureTickLabelSize,
  temperatureLabelTickOffsetX,
  temperatureTickLabelWeight,
  temperatureTickLabelStroke,
} from '../../consts';
import { peripheralsStyles } from '@/styles/peripherals';

type Props = {
  y: number;
  label: string;
};

export default function TemperatureLabel({ y, label }: Props) {
  return (
    <text
      x={temperatureLabelTickOffsetX}
      y={y}
      strokeWidth={temperatureTickLabelStroke}
      fontSize={temperatureTickLabelSize}
      fontWeight={temperatureTickLabelWeight}
      dominantBaseline="middle"
      {...stylex.props([
        peripheralsStyles.axisValue,
        peripheralsStyles.axisValueStroke,
      ])}
    >{`${label} ˚C`}</text>
  );
}
