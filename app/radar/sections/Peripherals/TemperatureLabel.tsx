import { gray, white } from '@/consts/colors';
import {
  temperatureTickLabelSize,
  temperatureLabelTickOffsetX,
  temperatureTickLabelWeight,
  temperatureTickLabelStroke,
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
      fill={gray[300]}
      paintOrder="stroke"
      strokeWidth={temperatureTickLabelStroke}
      stroke={white}
      fontSize={temperatureTickLabelSize}
      fontWeight={temperatureTickLabelWeight}
      dominantBaseline="middle"
    >{`${label} ˚C`}</text>
  );
}
