import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { displayAmpm, setDisplayAmpm } = useClock();

  useEffect(() => {
    if (!localStorage.getItem('displayAmpm')) {
      setDisplayAmpm(true);
    }

    localStorage.setItem('displayAmpm', JSON.stringify(displayAmpm));

    // eslint-disable-next-line
  }, [displayAmpm]);

  const handleChange = (e) => {
    setDisplayAmpm((displayAmpm) => !displayAmpm);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Display AMPM"
          labelPlacement="start"
          checked={displayAmpm}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
