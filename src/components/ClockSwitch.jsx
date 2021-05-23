import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function ClockSwitch() {
  const { displayClock, setDisplayClock } = useClock();

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
          control={<Switch color="primary" />}
          label="Display Clock"
          labelPlacement="start"
          checked={displayClock}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
