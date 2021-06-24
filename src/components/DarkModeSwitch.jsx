import React, { useEffect } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
} from '@material-ui/core';
import { setObjectToLocalStorage } from 'utils/localStorage';

export default function DarkModeSwitch({ isDarkMode, setIsDarkMode }) {
  useEffect(() => {
    setObjectToLocalStorage('settings', 'isDarkMode', isDarkMode);

    // eslint-disable-next-line
  }, [isDarkMode]);

  const handleChange = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
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
                'aria-label': 'Toggle theme mode switch',
              }}
              color="primary"
            />
          }
          label="Toggle theme mode"
          labelPlacement="start"
          checked={isDarkMode}
          onChange={handleChange}
        />
      </FormGroup>
    </FormControl>
  );
}
