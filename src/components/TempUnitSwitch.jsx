import React, { useEffect } from 'react';
import {
  FormControl,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@material-ui/core';
import { useWeather } from 'context/useWeather';

export default function TempUnitSwitch() {
  const { isFahrenheit, setIsFahrenheit } = useWeather();

  useEffect(() => {
    if (!localStorage.getItem('isFahrenheit')) {
      setIsFahrenheit(true);
    }

    localStorage.setItem('isFahrenheit', JSON.stringify(isFahrenheit));

    // eslint-disable-next-line
  }, [isFahrenheit]);

  const handleChange = () => {
    setIsFahrenheit((isFahrenheit) => !isFahrenheit);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup row>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Change Temperature Unit</Grid>
            <Grid item>°C</Grid>
            <Grid item>
              <Switch
                checked={isFahrenheit}
                onChange={handleChange}
                color="primary"
              />
            </Grid>
            <Grid item>°F</Grid>
          </Grid>
        </Typography>
      </FormGroup>
    </FormControl>
  );
}
