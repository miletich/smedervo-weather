import { type ComponentType, type ReactElement } from 'react';

import type { Datum } from './data';
import getDataServer from './getDataServer';

export default function withDataServer<T>(
  Component: ComponentType<T & { data: Datum[] }>
) {
  return async function ComponentWithData(props: T) {
    const data = await getDataServer();

    return <Component {...props} data={data} />;
  };
}
