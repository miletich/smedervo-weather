import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'span'>;

export default forwardRef<HTMLSpanElement, Props>(function Numeric(
  { className = '', children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      className={`${className} tabular-nums text-end block`}
      {...rest}
    >
      {children}
    </span>
  );
});
