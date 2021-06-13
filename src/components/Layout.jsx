import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useUnsplash } from 'context/useUnsplash';

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '7vh 87vh 6vh',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: `url(${props.photoUrl}) no-repeat center center/cover`,
    textAlign: 'center',
    animationName: 'fadeIn',
    animationDuration: '1s',
    animationFillMode: 'both',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: `rgba(0, 0, 0, ${props.alpha})`,
    },
  }),
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

export default function Layout({ children }) {
  const { data, alpha } = useUnsplash();
  const { photoUrl, photoUrlEncoded } = data;

  const classes = useStyles({
    photoUrl: photoUrlEncoded ? photoUrlEncoded : photoUrl,
    alpha: alpha / 100,
  });

  return <Box className={classes.container}>{children}</Box>;
}
