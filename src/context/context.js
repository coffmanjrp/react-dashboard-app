import { useProvideUnsplash, unsplashContext } from './useUnsplash';
import { useProvideWeather, weatherContext } from './useWeather';
import { clockContext, useProvideClock } from './useClock';

export const ContextProvider = ({ children }) => {
  const unsplash = useProvideUnsplash();
  const clock = useProvideClock();
  const weather = useProvideWeather();

  return (
    <unsplashContext.Provider value={unsplash}>
      <weatherContext.Provider value={weather}>
        <clockContext.Provider value={clock}>{children}</clockContext.Provider>
      </weatherContext.Provider>
    </unsplashContext.Provider>
  );
};
