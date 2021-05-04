import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClockContext } from '../context/clock';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  time: {
    fontSize: '8rem',
    height: '70%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem',
    },
  },
  ampm: {
    marginLeft: '0.5rem',
    fontSize: '0.5em',
    fontWeight: 300,
  },
  date: {
    fontSize: '2rem',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}));

const clockVariants = {
  initial: {
    opacity: 0,
    y: '-10px',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.8,
    },
  },
};

const ampmVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const dateVariants = {
  initial: {
    opacity: 0,
    y: '10px',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

export default function Clock() {
  const {
    hours,
    minutes,
    seconds,
    date,
    loading,
    setHours,
    setMinutes,
    setSeconds,
    setDate,
  } = useContext(ClockContext);

  const classes = useStyles();
  const today = new Date();
  const ampm = hours <= 12 ? 'AM' : 'PM';

  // const twelveTimeFormat = hours % 12 || 12;

  useEffect(() => {
    setDate(
      today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      })
    );

    setTimeout(() => {
      setHours(today.getHours());
      setMinutes(today.getMinutes());
      setSeconds(today.getSeconds());
    }, 1000);

    // eslint-disable-next-line
  }, [seconds]);

  const displayTime = (hour, minute, second) => {
    return `${appendZero(hour)}:${appendZero(minute)}:${appendZero(second)}`;
  };

  const appendZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  };

  return (
    <>
      {!loading && (
        <div className={classes.container}>
          <motion.time
            className={classes.time}
            variants={clockVariants}
            initial="initial"
            animate="animate"
          >
            {displayTime(hours, minutes, seconds)}
            <motion.span className={classes.ampm} variants={ampmVariants}>
              {ampm}
            </motion.span>
          </motion.time>
          <motion.time
            className={classes.date}
            variants={dateVariants}
            initial="initial"
            animate="animate"
          >
            {date}
          </motion.time>
        </div>
      )}
    </>
  );
}
