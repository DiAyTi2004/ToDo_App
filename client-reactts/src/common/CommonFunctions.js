import { Suspense } from 'react';

import SuspenseLoader from 'src/components/SuspenseLoader/SuspenseLoaderIndex';

export const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);