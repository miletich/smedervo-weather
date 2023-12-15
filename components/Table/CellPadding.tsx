import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'div'>;

export default forwardRef<HTMLDivElement, Props>(function CellPadding(
  { className = '', children, ...rest },
  ref
) {
  return (
    <div ref={ref} className={`p-2 h-[inherit] ${className}`} {...rest}>
      {children}
    </div>
  );
});
