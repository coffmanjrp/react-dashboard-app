import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
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

export default function DownloadButton() {
  const ref = useRef();
  const [downloadPhoto, setDownloadPhoto] = useState('');
  const classes = useStyles();
  const { setIsShared, setIsDownloaded } = useSettings();
  const {
    data: { id, downloadEndpoint, downloadLink },
  } = useUnsplash();

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getDownloadLink();

    // eslint-disable-next-line
  }, [downloadEndpoint]);

  const handleClick = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsDownloaded(false);
    }
  };

  const getDownloadLink = async () => {
    try {
      const res = await fetch(downloadEndpoint);
      const data = await res.json();
      const { url } = data;

      setDownloadPhoto(url);
    } catch (error) {
      console.error('error occurred:', error.message);
    }
  };

  return (
    <Box ref={ref}>
      <BalloonTip content="Download Photo" placement="top">
        <IconButton
          href={`${id ? downloadPhoto : downloadLink}?force=true&dl=`}
          download
          className={classes.button}
          aria-label="Download Photo"
          color="inherit"
          onClick={() => {
            setIsShared(false);
            setIsDownloaded(true);
          }}
        >
          <FiDownload />
        </IconButton>
      </BalloonTip>
      <DownloadCard />
    </Box>
  );
}
