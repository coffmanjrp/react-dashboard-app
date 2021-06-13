import { useProvideUnsplash, unsplashContext } from './useUnsplash';
import { useProvideWeather, weatherContext } from './useWeather';

export const ContextProvider = ({ children }) => {
  const unsplash = useProvideUnsplash();
  const weather = useProvideWeather();

  return (
    <unsplashContext.Provider value={unsplash}>
      <weatherContext.Provider value={weather}>
        {children}
      </weatherContext.Provider>
    </unsplashContext.Provider>
  );
};
