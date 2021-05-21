import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import Skycons from 'react-skycons';
import { useWeather } from 'context/useWeather';
import { WeatherInfo } from '.';

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
}));

export default function Weather() {
  const { weather, isFahrenheit } = useWeather();
  const classes = useStyles();

  if (!weather.id) {
    return (
      <Box className={classes.root}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

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
          <WeatherInfo weather={weather} isFahrenheit={isFahrenheit} />
        </Box>
      )}
    </>
  );
}
