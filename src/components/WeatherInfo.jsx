import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles({
  desc: {
    margin: 0,
    fontSize: '0.8rem',
  },
});

const descVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function WeatherInfo({ weather, isFahrenheit }) {
  const [info, setInfo] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => setInfo(info + 1), 30000);

    // eslint-disable-next-line
  }, [info]);

  const descriptions = [
    `${weather.description}`,
    `${weather.city}, ${weather.country}`,
    isFahrenheit
      ? `Max ${weather.fahrenheit_temp_max}°F / Min ${weather.fahrenheit_temp_min}°F`
      : `Max ${weather.celsius_temp_max}°C / Min ${weather.celsius_temp_min}°C`,
    `Humidity ${weather.humidity}%`,
    isFahrenheit
      ? `Feels like ${weather.fahrenheit_feels_like}°F`
      : `Feels like ${weather.celsius_feels_like}°C`,
    `Sunrise at ${weather.sunrise} AM`,
    `Sunset at ${weather.sunset} PM`,
  ];

  const infoIndex = Math.abs(info) % descriptions.length;

  return (
    <>
      {weather && (
        <AnimatePresence initial={false}>
          <motion.p
            variants={descVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            className={classes.desc}
          >
            {descriptions[infoIndex]}
          </motion.p>
        </AnimatePresence>
      )}
    </>
  );
}
