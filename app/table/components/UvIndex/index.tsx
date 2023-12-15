import Svg from '@/components/Svg';
import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'svg'>;

export default forwardRef<SVGSVGElement, Props>(function UvIndex(
  { className = '', ...rest },
  ref
) {
  return <Svg className={`${className}`} {...rest} ref={ref}></Svg>;
});
