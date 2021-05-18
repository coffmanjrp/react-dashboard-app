import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { showAmpm, setShowAmpm } = useClock();

  const handleChange = (e) => {
    setShowAmpm((showAmpm) => !showAmpm);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Show AMPM"
          labelPlacement="start"
          checked={showAmpm}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
