import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'p'>;

export default forwardRef<HTMLParagraphElement, Props>(function P(
  { className = '', children, ...rest },
  ref
) {
  return (
    <p ref={ref} className={`text-slate-300 ${className}`} {...rest}>
      {children}
    </p>
  );
});
