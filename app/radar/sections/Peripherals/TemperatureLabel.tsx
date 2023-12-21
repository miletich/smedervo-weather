import { zinc } from '@/consts/colors';
import {
  temperatureTickLabelSize,
  temperatureLabelTickOffsetX,
  temperatureTickLabelWeight,
  temperatureTickLabelStroke,
  white,
} from '../../consts';

type Props = {
  y: number;
  label: string;
};

export default function TemperatureLabel({ y, label }: Props) {
  return (
    <text
      x={temperatureLabelTickOffsetX}
      y={y}
      fill={zinc[300]}
      paintOrder="stroke"
      strokeWidth={temperatureTickLabelStroke}
      stroke={white}
      fontSize={temperatureTickLabelSize}
      fontWeight={temperatureTickLabelWeight}
      dominantBaseline="middle"
    >{`${label} ˚C`}</text>
  );
}
