import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function SecondsSwitch({ displaySeconds, setDisplaySeconds }) {
  useEffect(() => {
    setObjectToLocalStorage('settings', 'displaySeconds', displaySeconds);

    // eslint-disable-next-line
  }, [displaySeconds]);

  const handleChange = () => {
    setDisplaySeconds((displaySeconds) => !displaySeconds);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Display Seconds"
          labelPlacement="start"
          checked={displaySeconds}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
