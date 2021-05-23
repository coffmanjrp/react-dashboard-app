import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Greeting } from '.';
import { useClock } from 'context/useClock';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
  const {
    hours,
    minutes,
    seconds,
    date,
    ampm,
    displayClock,
    displaySeconds,
    displayDate,
    displayAmpm,
    displayTime,
    appendZero,
  } = useClock();
  const classes = useStyles();

  useEffect(() => {
    displayTime();

    // eslint-disable-next-line
  }, [seconds, date, ampm]);

  if (!displayClock) {
    return <div />;
  }

  return (
    <motion.div
      className={classes.container}
      initial="initial"
      animate="animate"
    >
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
        <Greeting hours={hours} />
      )}
    </motion.div>
  );
}
