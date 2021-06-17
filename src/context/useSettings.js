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
    if (getSettings?.background === undefined) setAlpha(20);
    else setAlpha(+getSettings.background);
    if (getSettings?.displayClock === undefined) setDisplayClock(true);
    else setDisplayClock(getSettings.displayClock);
    if (getSettings?.displaySeconds === undefined) setDisplaySeconds(false);
    else setDisplaySeconds(getSettings.displaySeconds);
    if (getSettings?.displayDate === undefined) setDisplayDate(true);
    else setDisplayDate(getSettings.displayDate);
    if (getSettings?.displayAmpm === undefined) setDisplayAmpm(true);
    else setDisplayAmpm(getSettings.displayAmpm);
    if (getSettings?.displayWeather === undefined) setDisplayWeather(true);
    else setDisplayWeather(getSettings.displayWeather);
    if (getSettings?.isDarkMode === undefined) setIsDarkMode(true);
    else setIsDarkMode(getSettings.isDarkMode);
    if (getSettings?.isFahrenheit === undefined) setIsFahrenheit(true);
    else setIsFahrenheit(getSettings.isFahrenheit);

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
