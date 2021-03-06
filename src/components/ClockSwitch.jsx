import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function ClockSwitch() {
  const { displayClock, setDisplayClock } = useSettings();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'displayClock', displayClock);

    // eslint-disable-next-line
  }, [displayClock]);

  const handleChange = () => {
    setDisplayClock((displayClock) => !displayClock);
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
                'aria-label': 'Display clock switch',
              }}
              color="primary"
            />
          }
          label="Display clock"
          labelPlacement="start"
          checked={displayClock}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
