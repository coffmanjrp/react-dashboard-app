import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useUnsplash } from 'context/useUnsplash';
import photo from 'photo.jpg';

const useStyles = makeStyles({
  container: (props) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: `url(${props.photoUrl}) no-repeat center center/cover`,
    textAlign: 'center',
    zIndex: -2,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: -1,
    },
  }),
});

export default function Wallpaper({ children }) {
  const { photoUrl, getRandomPhoto } = useUnsplash();
  const classes = useStyles({ photoUrl });

  useEffect(() => {
    getRandomPhoto('dog');

    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
