import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  greeting: {
    fontSize: '8rem',
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '5rem',
    },
  },
}));

const greetingVariants = {
  initial: {
    opacity: 1,
    x: '-10px',
  },
  animate: {
    opacity: 0,
    x: '0',
    transition: {
      duration: 1.5,
    },
  },
};

export default function Greeting() {
  const classes = useStyles();

  const displayGreetings = useMemo(() => {
    const hour = new Date().getHours();
    let greetingByTime;

    if (hour >= 5 && hour < 12) {
      greetingByTime = 'Good Morning!';
    } else if (hour >= 12 && hour < 19) {
      greetingByTime = 'Good Afternoon!';
    } else {
      greetingByTime = 'Good Evening!';
    }

    const greetings = [
      greetingByTime,
      'Hi!',
      'Hello!',
      'How do you do today?',
      'How’s it going?',
      'How are you doing?',
      'Howdy!',
      // 'What’s up?',
    ];

    return greetings[Math.floor(Math.random() * greetings.length)];
  }, []);

  return (
    <>
      <motion.h1
        className={classes.greeting}
        variants={greetingVariants}
        initial="initial"
        animate="animate"
      >
        {displayGreetings}
      </motion.h1>
    </>
  );
}
