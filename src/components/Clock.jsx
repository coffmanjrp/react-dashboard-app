import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Greeting } from 'components';
import { useSettings } from 'context/useSettings';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.display,
    pointerEvents: 'none',
    zIndex: 1,
  },
  time: {
    fontSize: '8rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4.5rem',
    },
  },
  ampm: {
    marginLeft: '0.5rem',
    fontSize: '0.5em',
    fontWeight: 300,
  },
  date: {
    marginTop: '-1.5rem',
    fontSize: '2rem',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-1rem',
      fontSize: '1.5rem',
    },
  },
}));

const clockVariants = {
  initial: {
    y: '-10px',
  },
  animate: {
    y: '0',
    transition: {
      duration: 1.6,
    },
  },
};

const hoursVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.0,
    },
  },
};

const minutesVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.2,
    },
  },
};

const secondsVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.0,
      delay: 0.4,
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
      duration: 1.0,
      delay: 1.0,
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
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [date, setDate] = useState(null);
  const [ampm, setAmpm] = useState(null);
  const { displaySeconds, displayDate, displayAmpm } = useSettings();

  const classes = useStyles();

  useEffect(() => {
    displayTime();

    // eslint-disable-next-line
  }, [seconds]);

  useEffect(() => {
    return () => {
      setHours(null);
      setMinutes(null);
      setSeconds(null);
      setDate(null);
      setAmpm(null);
    };
  }, []);

  const displayTime = () => {
    const today = new Date();

    setTimeout(() => {
      setHours(today.getHours());
      setMinutes(today.getMinutes());
      setSeconds(today.getSeconds());
    }, 1000);

    setAmpm(hours <= 12 ? 'AM' : 'PM');
    setDate(
      today.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      })
    );
  };

  const appendZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  };

  return (
    <motion.div className={classes.root} initial="initial" animate="animate">
      {seconds !== null ? (
        <>
          <motion.time className={classes.time} variants={clockVariants}>
            <motion.span variants={hoursVariants}>
              {appendZero(hours)}:
            </motion.span>
            <motion.span variants={minutesVariants}>
              {appendZero(minutes)}
            </motion.span>
            {displaySeconds && (
              <motion.span variants={secondsVariants}>
                :{appendZero(seconds)}
              </motion.span>
            )}
            <motion.span className={classes.ampm} variants={ampmVariants}>
              {displayAmpm && ampm}
            </motion.span>
          </motion.time>
          {displayDate && (
            <motion.time className={classes.date} variants={dateVariants}>
              {date}
            </motion.time>
          )}
        </>
      ) : (
        <Greeting />
      )}
    </motion.div>
  );
}
