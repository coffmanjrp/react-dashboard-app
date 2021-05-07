import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Menu, AuthorInfo } from './';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    width: '100%',
    height: '100%',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
  },
}));

const footerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Footer() {
  const classes = useStyles();

  return (
    <motion.footer
      className={classes.container}
      variants={footerVariants}
      initial="initial"
      animate="animate"
    >
      <AuthorInfo />
      <Menu />
    </motion.footer>
  );
}
