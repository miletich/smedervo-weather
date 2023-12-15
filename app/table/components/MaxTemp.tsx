import { type ComponentProps, forwardRef } from 'react';
import { scaleSequential } from 'd3';
import { interpolateTurbo } from 'd3-scale-chromatic';
import Numeric from '@/components/Numeric';

type Props = ComponentProps<'div'> & {
  temperature: number;
};

export default forwardRef<HTMLSpanElement, Props>(function MaxTemp(
  { className = '', temperature, ...rest },
  ref
) {
  const scale = scaleSequential()
    .domain([-15, 40])
    .interpolator(interpolateTurbo);
  return (
    <Numeric
      className={`${className} h-12 flex justify-end items-center pe-2`}
      style={{ backgroundColor: scale(temperature) }}
      {...rest}
      ref={ref}
    >
      {temperature.toFixed(1)}
    </Numeric>
  );
});
