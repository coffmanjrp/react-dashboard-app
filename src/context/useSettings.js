import { createContext, useContext, useEffect, useState } from 'react';
import { getSettings } from 'utils/localStorage';

export const settingsContext = createContext();

export const useSettings = () => {
  return useContext(settingsContext);
};

export const useProvideSettings = () => {
  const [alpha, setAlpha] = useState(20);
  const [displayClock, setDisplayClock] = useState(true);
  const [displaySeconds, setDisplaySeconds] = useState(false);
  const [displayDate, setDisplayDate] = useState(true);
  const [displayAmpm, setDisplayAmpm] = useState(true);
  const [displayWeather, setDisplayWeather] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [isShared, setIsShared] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    if (getSettings) {
      setAlpha(+getSettings.background);
      setDisplayClock(getSettings.displayClock);
      setDisplaySeconds(getSettings.displaySeconds);
      setDisplayDate(getSettings.displayDate);
      setDisplayAmpm(getSettings.displayAmpm);
      setDisplayWeather(getSettings.displayWeather);
      setIsDarkMode(getSettings.isDarkMode);
      setIsFahrenheit(getSettings.isFahrenheit);
    }

    // eslint-disable-next-line
  }, []);

  return {
    alpha,
    displayClock,
    displaySeconds,
    displayDate,
    displayAmpm,
    displayWeather,
    isDarkMode,
    isFahrenheit,
    isShared,
    isDownloaded,
    setAlpha,
    setDisplayClock,
    setDisplaySeconds,
    setDisplayDate,
    setDisplayAmpm,
    setDisplayWeather,
    setIsDarkMode,
    setIsFahrenheit,
    setIsShared,
    setIsDownloaded,
  };
};
