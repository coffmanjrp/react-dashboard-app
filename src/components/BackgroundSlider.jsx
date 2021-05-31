import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';
import { useUnsplash } from 'context/useUnsplash';
import { setObjectToLocalStorage } from 'utils/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    width: 200,
  },
}));

export default function BackgroundSlider() {
  const classes = useStyles();
  const { alpha, setAlpha } = useUnsplash();

  const handleChange = (e, opacity) => {
    setAlpha(opacity);
    setObjectToLocalStorage('settings', 'background', opacity);
  };

  return (
    <div className={classes.root}>
      <Typography id="brightness-slider" gutterBottom>
        Background brightness
      </Typography>
      <Slider
        value={alpha}
        aria-labelledby="brightness-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={50}
        onChange={handleChange}
      />
    </div>
  );
}
