import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { showDate, setShowDate } = useClock();

  const handleChange = (e) => {
    setShowDate((showDate) => !showDate);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Show Date"
          labelPlacement="start"
          checked={showDate}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
