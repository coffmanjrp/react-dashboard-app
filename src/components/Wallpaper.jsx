import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Context } from '../context';
import photo from '../photo.jpg';

const useStyles = makeStyles({
  container: (props) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: `url(${props.photos}) no-repeat center center/cover`,
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
  const { photos, setPhotos } = useContext(Context);

  // const unsplash = createApi({
  //   accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  // });

  const classes = useStyles({ photos });

  useEffect(() => {
    unsplashPhoto();

    // eslint-disable-next-line
  }, []);

  const unsplashPhoto = async () => {
    // const { response } = await unsplash.photos.getRandom({
    //   query: 'cat',
    // });

    setPhotos(photo);
  };

  return <div className={classes.container}>{children}</div>;
}
