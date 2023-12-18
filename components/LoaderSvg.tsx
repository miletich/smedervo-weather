import { type ComponentProps, forwardRef } from 'react';
import Svg from './Svg';

type Props = ComponentProps<'svg'>;

export default forwardRef<SVGSVGElement, Props>(function LoaderSvg(
  { className = '', ...rest },
  ref
) {
  const base = 3;
  const r = (base * 2) / 3;
  const padding = base / 2;
  const width = r * 2 * 3 + padding * 4;
  const height = (padding + r) * 2;

  return (
    <Svg
      className={`fill-indigo-900 ${className}`}
      {...rest}
      width={width}
      height={height}
      ref={ref}
    >
      {new Array(3).fill(0).map((_, i) => (
        <circle
          key={i}
          cx={padding + r + (2 * r + padding) * i}
          cy={padding + r}
          r={r}
        >
          <animate
            attributeName="opacity"
            dur="2s"
            values="0;1;0"
            repeatCount="indefinite"
            begin={0.2 * (i + 1)}
          />
          <animate
            attributeName="r"
            dur="2s"
            values={`${r};${r + padding / 4};${r}`}
            repeatCount="indefinite"
            begin={0.2 * (i + 1)}
          />
        </circle>
      ))}
    </Svg>
  );
});
