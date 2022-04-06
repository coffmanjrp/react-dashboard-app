import React from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Weather } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
    height: '100%',
    color: theme.palette.text.display,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
}));

const headerVariants = {
  initial: {
    opacity: 0,
    y: '-10px',
  },
  animate: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.8,
      delay: 2.2,
    },
  },
};

export default function Header() {
  const classes = useStyles();

  return (
    <motion.header
      className={classes.container}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <Weather />
    </motion.header>
  );
}
