import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { setObjectToLocalStorage } from 'utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

export default function TempUnitSwitch() {
  const { isFahrenheit, setIsFahrenheit } = useSettings();
  const classes = useStyles();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'isFahrenheit', isFahrenheit);

    // eslint-disable-next-line
  }, [isFahrenheit]);

  const handleChange = () => {
    setIsFahrenheit((isFahrenheit) => !isFahrenheit);
  };

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormGroup row>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Change Temperature Unit</Grid>
            <Grid item>°C</Grid>
            <Grid item>
              <Switch
                inputProps={{
                  role: 'switch',
                  'aria-label': 'Toggle temperature unit switch',
                }}
                checked={isFahrenheit}
                onChange={handleChange}
                color="primary"
              />
            </Grid>
            <Grid item>°F</Grid>
          </Grid>
        </Typography>
      </FormGroup>
    </FormControl>
  );
}
