import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function AmPmSwitch() {
  const { displayDate, setDisplayDate } = useSettings();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'displayDate', displayDate);

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
