import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { showSeconds, setShowSeconds } = useClock();

  const handleChange = (e) => {
    setShowSeconds((showSeconds) => !showSeconds);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Show Seconds"
          labelPlacement="start"
          checked={showSeconds}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
