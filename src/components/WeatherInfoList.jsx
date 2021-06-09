import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useWeather } from 'context/useWeather';
import weatherInfoData from 'utils/weatherInfoData';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function WeatherInfoList() {
  const { weather, isFahrenheit } = useWeather();
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
