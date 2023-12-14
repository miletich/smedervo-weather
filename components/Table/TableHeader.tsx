import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'thead'>;

export default forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  { className = '', children, ...rest },
  ref
) {
  return (
    <thead ref={ref} className={`${className}`} {...rest}>
      {children}
    </thead>
  );
});
