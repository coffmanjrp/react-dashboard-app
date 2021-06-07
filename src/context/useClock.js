import { createContext, useContext, useEffect, useState } from 'react';
import { getSettings } from 'utils/localStorage';

export const clockContext = createContext();

export const useClock = () => {
  return useContext(clockContext);
};

export const useProvideClock = () => {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [date, setDate] = useState(null);
  const [ampm, setAmpm] = useState(null);
  const [displayClock, setDisplayClock] = useState(getSettings?.displayClock);
  const [displaySeconds, setDisplaySeconds] = useState(
    getSettings?.displaySeconds
  );
  const [displayDate, setDisplayDate] = useState(getSettings?.displayDate);
  const [displayAmpm, setDisplayAmpm] = useState(getSettings?.displayAmpm);

  // const twelveTimeFormat = hours % 12 || 12;

  useEffect(() => {
    if (!getSettings) {
      setDisplayClock(true);
      setDisplaySeconds(true);
      setDisplayDate(true);
      setDisplayAmpm(true);
    }

    // eslint-disable-next-line
  }, []);

  const displayTime = () => {
    const today = new Date();

    setTimeout(() => {
      setHours(today.getHours());
      setMinutes(today.getMinutes());
      setSeconds(today.getSeconds());
    }, 1000);

    setAmpm(hours <= 12 ? 'AM' : 'PM');
    setDate(
      today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      })
    );
  };

  const appendZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  };

  return {
    hours,
    minutes,
    seconds,
    date,
    ampm,
    displayClock,
    displaySeconds,
    displayDate,
    displayAmpm,
    setDisplayClock,
    setDisplaySeconds,
    setDisplayDate,
    setDisplayAmpm,
    displayTime,
    appendZero,
  };
};
