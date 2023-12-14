import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'tbody'>;

export default forwardRef<HTMLTableSectionElement, Props>(function TableBody(
  { className = '', children, ...rest },
  ref
) {
  return (
    <tbody ref={ref} className={`${className}`} {...rest}>
      {children}
    </tbody>
  );
});
