import {
  gray,
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
      fill={gray}
      paintOrder="stroke"
      strokeWidth={temperatureTickLabelStroke}
      stroke={white}
      fontSize={temperatureTickLabelSize}
      fontWeight={temperatureTickLabelWeight}
      dominantBaseline="middle"
    >{`${label} ˚C`}</text>
  );
}
