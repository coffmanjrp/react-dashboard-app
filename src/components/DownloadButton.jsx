import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { BalloonTip, DownloadCard } from '.';
import { useSettings } from 'context/useSettings';
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

export default function DownloadButton() {
  const ref = useRef();
  const classes = useStyles();
  const { setIsShared, setIsDownloaded } = useSettings();
  const {
    data: { downloadLink },
  } = useUnsplash();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsDownloaded(false);
    }
  };

  return (
    <Box ref={ref}>
      <BalloonTip content="Download Photo" placement="top">
        <motion.div variants={buttonVariants} whileHover="hover">
          <IconButton
            className={classes.button}
            rel="nofollow"
            href={`${downloadLink}?force=true`}
            download
            aria-label="Download Photo"
            color="inherit"
            onClick={() => {
              setIsShared(false);
              setIsDownloaded(true);
            }}
          >
            <FiDownload />
          </IconButton>
        </motion.div>
      </BalloonTip>
      <DownloadCard />
    </Box>
  );
}
