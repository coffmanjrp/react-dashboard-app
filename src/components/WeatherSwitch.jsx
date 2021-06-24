import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function WeatherSwitch() {
  const { displayWeather, setDisplayWeather } = useSettings();

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
          control={
            <Switch
              inputProps={{
                role: 'switch',
                'aria-label': 'Display weather information switch',
              }}
              color="primary"
            />
          }
          label="Display weather Information"
          labelPlacement="start"
          checked={displayWeather}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
