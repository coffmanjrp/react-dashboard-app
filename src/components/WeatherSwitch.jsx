import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useWeather } from 'context/useWeather';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function WeatherSwitch() {
  const { displayWeather, setDisplayWeather } = useWeather();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'displayWeather', displayWeather);

    // eslint-disable-next-line
  }, [displayWeather]);

  const handleChange = () => {
    setDisplayWeather((displayWeather) => !displayWeather);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Display Weather Information"
          labelPlacement="start"
          checked={displayWeather}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
