import { useProvideUnsplash, unsplashContext } from './useUnsplash';

import { clockContext, useProvideClock } from './useClock';

export const ContextProvider = ({ children }) => {
  const unsplash = useProvideUnsplash();
  const clock = useProvideClock();

  return (
    <unsplashContext.Provider value={unsplash}>
      <clockContext.Provider value={clock}>{children}</clockContext.Provider>
    </unsplashContext.Provider>
  );
};
