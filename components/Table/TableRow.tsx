import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'tr'>;

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { className = '', children, ...rest },
  ref
) {
  return (
    <tr
      ref={ref}
      className={`odd:bg-slate-100 hover:bg-indigo-100 ${className}`}
      {...rest}
    >
      {children}
    </tr>
  );
});
