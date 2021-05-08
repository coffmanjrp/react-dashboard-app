import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import { SiUnsplash } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles({
  container: {
    width: '2.8rem',
    height: '2.8rem',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.3rem',
    color: 'inherit',
  },
});

const buttonVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.6,
    },
  },
};

export default function UnsplashLink() {
  const classes = useStyles();
  const {
    data: { unsplashLink },
  } = useUnsplash();

  return (
    <motion.div
      className={classes.container}
      variants={buttonVariants}
      whileHover="hover"
    >
      <IconButton className={classes.button} aria-label="View on Unsplash">
        <Link
          href={unsplashLink}
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <SiUnsplash />
        </Link>
      </IconButton>
    </motion.div>
  );
}
