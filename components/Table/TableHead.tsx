import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'th'>;

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { className = '', children, ...rest },
  ref
) {
  return (
    <th ref={ref} className={`py-4 px-4 ${className}`} {...rest}>
      {children}
    </th>
  );
});
