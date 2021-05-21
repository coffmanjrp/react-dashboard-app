import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import Skycons from 'react-skycons';
import { useWeather } from 'context/useWeather';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: '1rem',
  },
  desc: {
    margin: 0,
    fontSize: '0.7rem',
  },
}));

const descVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function WeatherInfo() {
  const [info, setInfo] = useState(0);
  const { weather, isFahrenheit } = useWeather();
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => setInfo(info + 1), 20000);

    // eslint-disable-next-line
  }, [info]);

  if (!weather.id) {
    return (
      <Box className={classes.root}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

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
        <Box className={classes.root}>
          <Box className={classes.container}>
            <Skycons
              color="white"
              type={weather.skycon}
              animate={true}
              size={25}
              resizeClear={true}
            />
            <Typography variant="h5" className={classes.temp}>
              {isFahrenheit ? weather.fahrenheit_temp : weather.celsius_temp}
              <span>{isFahrenheit ? '°F' : '°C'}</span>
            </Typography>
          </Box>
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
        </Box>
      )}
    </>
  );
}
