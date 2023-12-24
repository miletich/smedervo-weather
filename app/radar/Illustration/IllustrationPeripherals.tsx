import FreezingMarker from '../sections/Peripherals/FreezingMarker';
import MonthTicks from '../sections/Peripherals/MonthTicks';
import TemperatureTicks from '../sections/Peripherals/TemperatureTicks';

export default function IllustrationPeripherals() {
  return (
    <>
      <MonthTicks hideLabels />
      <TemperatureTicks hideLabels />
      <FreezingMarker />
    </>
  );
}
