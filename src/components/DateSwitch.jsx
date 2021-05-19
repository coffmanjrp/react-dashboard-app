import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useClock } from 'context/useClock';

export default function AmPmSwitch() {
  const { displayDate, setDisplayDate } = useClock();

  useEffect(() => {
    if (!localStorage.getItem('displayDate')) {
      setDisplayDate(true);
    }

    localStorage.setItem('displayDate', JSON.stringify(displayDate));

    // eslint-disable-next-line
  }, [displayDate]);

  const handleChange = () => {
    setDisplayDate((displayDate) => !displayDate);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Display Date"
          labelPlacement="start"
          checked={displayDate}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
