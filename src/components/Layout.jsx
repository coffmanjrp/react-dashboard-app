import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles({
  container: (props) => ({
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '5vh 90vh 5vh',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: `url(${props.photoUrl}) no-repeat center center/cover`,
    textAlign: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  }),
});

export default function Layout({ children }) {
  const {
    data: { photoUrl },
    getRandomPhoto,
  } = useUnsplash();
  const classes = useStyles({ photoUrl });

  useEffect(() => {
    getRandomPhoto(localStorage.getItem('keywords'));

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
