import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  time: {
    fontSize: '8rem',
  },
  ampm: {
    marginLeft: '0.5rem',
    fontSize: '0.5em',
    fontWeight: '300',
  },
});

export default function Clock() {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const classes = useStyles();
  const today = new Date();
  const ampm = hours <= 12 ? 'AM' : 'PM';
  // const twelveTimeFormat = hours % 12 || 12;

  useEffect(() => {
    setTimeout(() => {
      setHours(today.getHours());
      setMinutes(today.getMinutes());
      setSeconds(today.getSeconds());
    }, 1000);

    // eslint-disable-next-line
  }, [hours, minutes, seconds]);

  const appendZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  };

  if (hours === null || minutes === null || seconds === null) {
    return 'Loading...';
  }

  return (
    <div>
      <time className={classes.time}>
        {`${appendZero(hours)}:${appendZero(minutes)}:${appendZero(seconds)}`}
        <span className={classes.ampm}>{ampm}</span>
      </time>
    </div>
  );
}
