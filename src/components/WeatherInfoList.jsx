import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { useWeather } from 'context/useWeather';
import weatherInfoData from 'utils/weatherInfoData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function WeatherInfoList() {
  const { isFahrenheit } = useSettings();
  const { weather } = useWeather();
  const information = weatherInfoData(weather, isFahrenheit);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <Typography variant="h5">
            {isFahrenheit ? weather.fahrenheit_temp : weather.celsius_temp}
            {isFahrenheit ? '°F' : '°C'}
          </Typography>
        </ListItem>
        {information?.length > 0 &&
          information.map((info, index) => (
            <ListItem key={index}>
              <ListItemText primary={info} />
            </ListItem>
          ))}
      </List>
    </div>
  );
}
