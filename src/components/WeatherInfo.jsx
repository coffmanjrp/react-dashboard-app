import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Skycons, { SkyconsType } from 'react-skycons';
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
  const [weather, setWeather] = useWeather();
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [icon, setIcon] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    switchIcons();

    // eslint-disable-next-line
  }, []);

  const switchIcons = () => {
    switch (weather.icon) {
      case '01d':
        setIcon(SkyconsType.CLEAR_DAY);
        break;
      case '01n':
        setIcon(SkyconsType.CLEAR_NIGHT);
        break;
      case '02d':
        setIcon(SkyconsType.PARTLY_CLOUDY_DAY);
        break;
      case '02n':
        setIcon(SkyconsType.PARTLY_CLOUDY_NIGHT);
        break;
      case '03d':
        setIcon(SkyconsType.CLOUDY);
        break;
      case '03n':
        setIcon(SkyconsType.CLOUDY);
        break;
      case '04d':
        setIcon(SkyconsType.CLOUDY);
        break;
      case '04n':
        setIcon(SkyconsType.CLOUDY);
        break;
      case '09d':
        setIcon(SkyconsType.SLEET);
        break;
      case '09n':
        setIcon(SkyconsType.SLEET);
        break;
      case '10d':
        setIcon(SkyconsType.RAIN);
        break;
      case '10n':
        setIcon(SkyconsType.RAIN);
        break;
      case '11d':
        setIcon(SkyconsType.RAIN);
        break;
      case '11n':
        setIcon(SkyconsType.RAIN);
        break;
      case '13d':
        setIcon(SkyconsType.SNOW);
        break;
      case '13n':
        setIcon(SkyconsType.SNOW);
        break;
      case '50d':
        setIcon(SkyconsType.FOG);
        break;
      case '50n':
        setIcon(SkyconsType.FOG);
        break;
      default:
        return false;
    }
  };

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
            type={icon}
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
