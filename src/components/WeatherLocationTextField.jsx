import React, { useEffect, useState } from 'react';
import { makeStyles, IconButton, TextField, Box } from '@material-ui/core';
import { FaSearchLocation } from 'react-icons/fa';
import { useWeather } from 'context/useWeather';
import { setObjectToLocalStorage } from 'utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  btn: {
    marginTop: '-1.5rem',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function WeatherLocationTextField() {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const { location, setLocation } = useWeather();
  const classes = useStyles();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'location', location);

    // eslint-disable-next-line
  }, [location]);

  const handleChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      setErrorMessage(
        'This city is not available. Please enter a different city.'
      );
      return false;
    }

    setLocation(value);
    setValue('');
  };

  return (
    <Box className={classes.root}>
      <Box component="form" className={classes.input} onSubmit={handleSubmit}>
        <TextField
          type="search"
          id="set-location"
          className={classes.textField}
          variant="outlined"
          size="small"
          autoComplete="off"
          error={error}
          helperText={
            error ? errorMessage : 'Please enter the city name where you live.'
          }
          placeholder={location}
          value={value}
          onChange={handleChange}
        />
        <IconButton
          type="submit"
          aria-label="Search"
          color="primary"
          className={classes.btn}
        >
          <FaSearchLocation />
        </IconButton>
      </Box>
    </Box>
  );
}
