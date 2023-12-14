import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'th'>;

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { className = '', children, ...rest },
  ref
) {
  return (
    <th ref={ref} className={`${className}`} {...rest}>
      {children}
    </th>
  );
});
