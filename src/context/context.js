import { useProvideSettings, settingsContext } from './useSettings';
import { useProvideUnsplash, unsplashContext } from './useUnsplash';
import { useProvideWeather, weatherContext } from './useWeather';

export const ContextProvider = ({ children }) => {
  const settings = useProvideSettings();
  const unsplash = useProvideUnsplash();
  const weather = useProvideWeather();

  return (
    <settingsContext.Provider value={settings}>
      <unsplashContext.Provider value={unsplash}>
        <weatherContext.Provider value={weather}>
          {children}
        </weatherContext.Provider>
      </unsplashContext.Provider>
    </settingsContext.Provider>
  );
};
