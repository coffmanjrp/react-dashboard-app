import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Skycons from 'react-skycons';
import { useWeather } from 'context/useWeather';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: '1rem',
  },
  desc: {
    fontSize: '0.8rem',
  },
}));

export default function WeatherInfo() {
  const { weather } = useWeather();
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const classes = useStyles();

  if (!weather) {
    return (
      <Box className={classes.container}>
        <Typography variant="h5" className={classes.temp}>
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {weather && (
        <Box className={classes.root}>
          <Skycons
            color="white"
            type={weather.skycon}
            animate={true}
            size={30}
            resizeClear={true}
          />
          <Box className={classes.container}>
            <Typography variant="h5" className={classes.temp}>
              {isFahrenheit ? weather.fahrenheit : weather.celsius}
              <span>{isFahrenheit ? '°F' : '°C'}</span>
            </Typography>
            <Typography className={classes.desc}>
              {weather.description}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
