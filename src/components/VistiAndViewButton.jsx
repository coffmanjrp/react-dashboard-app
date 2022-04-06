import React from 'react';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import { RiWindow2Line } from 'react-icons/ri';
import { BalloonTip, ShareCard } from 'components';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles({
  container: {
    width: '2.8rem',
    height: '2.8rem',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.4rem',
  },
});

export default function VistiAndViewButton() {
  const classes = useStyles();
  const {
    data: { thumbnail, unsplashLink },
  } = useUnsplash();

  return (
    <Box>
      <BalloonTip
        content={
          <div>
            <h4>View on Unsplash.com</h4>
            <img src={thumbnail} alt="thumbnail" />
          </div>
        }
        placement="top"
      >
        <IconButton
          className={classes.button}
          href={`${unsplashLink}?utm_source=${process.env.REACT_APP_NAME}&utm_medium=referral`}
          rel="nofollow"
          aria-label="View photo on Unsplash website"
          target="_blank"
          color="inherit"
        >
          <RiWindow2Line />
        </IconButton>
      </BalloonTip>
      <ShareCard />
    </Box>
  );
}
