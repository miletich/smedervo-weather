import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'table'>;

export default forwardRef<HTMLTableElement, Props>(function Table(
  { className = '', children, ...rest },
  ref
) {
  return (
    <table ref={ref} className={`${className}`} {...rest}>
      {children}
    </table>
  );
});
