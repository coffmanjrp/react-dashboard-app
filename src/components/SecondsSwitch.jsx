import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { displaySeconds, setDisplaySeconds } = useClock();

  useEffect(() => {
    if (!localStorage.getItem('displaySeconds')) {
      setDisplaySeconds(true);
    }

    localStorage.setItem('displaySeconds', JSON.stringify(displaySeconds));

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
