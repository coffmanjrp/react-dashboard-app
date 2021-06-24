import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { motion } from 'framer-motion';
import { SiUnsplash } from 'react-icons/si';
import { BalloonTip } from '.';
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

export default function UnsplashLogoButton() {
  const classes = useStyles();
  const {
    data: { thumbnail, unsplashLink },
  } = useUnsplash();

  return (
    <BalloonTip
      content={
        <div>
          <h4>View photo on Unsplash website</h4>
          <img src={thumbnail} alt="thumbnail" />
        </div>
      }
      placement="bottom-end"
    >
      <motion.div
        className={classes.container}
        variants={buttonVariants}
        whileHover="hover"
      >
        <IconButton
          className={classes.button}
          href={unsplashLink}
          rel="nofollow"
          aria-label="View photo on Unsplash website"
          target="_blank"
          color="inherit"
        >
          <SiUnsplash />
        </IconButton>
      </motion.div>
    </BalloonTip>
  );
}
