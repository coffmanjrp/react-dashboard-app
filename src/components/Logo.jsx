import React from 'react';
import { makeStyles, IconButton, Box } from '@material-ui/core';
import { FaCamera } from 'react-icons/fa';
import { BalloonTip } from 'components';
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

export default function Logo() {
  const classes = useStyles();
  const {
    data: { thumbnail, unsplashLink },
  } = useUnsplash();

  return (
    <BalloonTip
      content={
        <div>
          <h4>LOGO</h4>
          <img src={thumbnail} alt="thumbnail" />
        </div>
      }
      placement="bottom-end"
    >
      <Box className={classes.container}>
        <IconButton
          className={classes.button}
          href={`${unsplashLink}?utm_source=${process.env.REACT_APP_NAME}&utm_medium=referral`}
          rel="nofollow"
          aria-label="View photo on Unsplash website"
          target="_blank"
          color="inherit"
        >
          <FaCamera />
        </IconButton>
      </Box>
    </BalloonTip>
  );
}
