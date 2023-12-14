import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'tr'>;

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { className = '', children, ...rest },
  ref
) {
  return (
    <tr ref={ref} className={`${className}`} {...rest}>
      {children}
    </tr>
  );
});
