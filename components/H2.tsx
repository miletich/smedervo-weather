import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'h2'>;

export default forwardRef<HTMLHeadingElement, Props>(function H2(
  { className = '', children, ...rest },
  ref
) {
  return (
    <h2
      ref={ref}
      className={`text-2xl font-bold text-slate-500 ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
});
