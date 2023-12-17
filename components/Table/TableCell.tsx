import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'td'>;

export default forwardRef<HTMLTableCellElement, Props>(function TableCell(
  { className = '', children, ...rest },
  ref
) {
  return (
    <td ref={ref} className={`h-full py-2 px-4 ${className}`} {...rest}>
      {children}
    </td>
  );
});
