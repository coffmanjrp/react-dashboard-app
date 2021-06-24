import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, Grid } from '@material-ui/core';
import { useSettings } from 'context/useSettings';
import { setObjectToLocalStorage } from 'utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    width: 260,
  },
  slider: {
    width: 200,
  },
}));

export default function BackgroundSlider() {
  const classes = useStyles();
  const { alpha, setAlpha } = useSettings();

  useEffect(() => {
    setObjectToLocalStorage('settings', 'background', alpha);

    // eslint-disable-next-line
  }, [alpha]);

  const handleChange = (e, value) => {
    setAlpha(value);
  };

  return (
    <div className={classes.root}>
      <Typography id="slider-for-background-brightness" gutterBottom>
        Background brightness
      </Typography>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs>
          <Slider
            value={alpha}
            className={classes.slider}
            aria-labelledby="slider-for-background-brightness"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={50}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Typography>{`${alpha !== 0 ? '-' : ''} ${alpha} %`}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
