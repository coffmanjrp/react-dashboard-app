import { createContext, useContext, useState } from 'react';

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

  // const twelveTimeFormat = hours % 12 || 12;

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

  const showGreetings = () => {
    let greetingByTime;

    if (hours >= 5 && hours < 12) {
      greetingByTime = 'Good Morning!';
    } else if (hours >= 12 && hours < 18) {
      greetingByTime = 'Good Afternoon!';
    } else {
      greetingByTime = 'Good Evening!';
    }

    const greetings = [
      greetingByTime,
      // 'Hi!',
      // 'Hello!',
      // 'How do you do today?',
      // 'How’s it going?',
      // 'How are you doing?',
      // 'What’s up?',
      // 'Howdy!',
    ];

    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  return {
    hours,
    minutes,
    seconds,
    date,
    ampm,
    displayTime,
    appendZero,
    showGreetings,
  };
};
