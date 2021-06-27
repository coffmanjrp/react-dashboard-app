import React, { useEffect, useRef } from 'react';
import { makeStyles, Box, IconButton } from '@material-ui/core';
import { RiShareForwardBoxLine } from 'react-icons/ri';
import { BalloonTip, ShareCard } from 'components';
import { useSettings } from 'context/useSettings';

const useStyles = makeStyles({
  container: {
    width: '2.8rem',
    height: '2.8rem',
  },
  button: {
    width: '100%',
    height: '100%',
    fontSize: '1.3rem',
  },
});

export default function ShareButton() {
  const ref = useRef();
  const classes = useStyles();
  const { setIsShared, setIsDownloaded } = useSettings();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsShared(false);
    }
  };

  return (
    <Box ref={ref}>
      <BalloonTip content="Share Photo" placement="top">
        <IconButton
          className={classes.button}
          aria-label="Download Photo"
          color="inherit"
          onClick={() => {
            setIsShared((isShared) => !isShared);
            setIsDownloaded(false);
          }}
        >
          <RiShareForwardBoxLine />
        </IconButton>
      </BalloonTip>
      <ShareCard />
    </Box>
  );
}
