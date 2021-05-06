import { createContext, useContext, useState } from 'react';
import { createApi } from 'unsplash-js';
import photo from 'photo.jpg';

export const unsplashContext = createContext();

export const useUnsplash = () => {
  return useContext(unsplashContext);
};

export const useProvideUnsplash = () => {
  const [photoUrl, setPhotoUrl] = useState(null);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (query) => {
    try {
      const { response } = await unsplash.photos.getRandom({
        query,
      });

      setPhotoUrl(response.urls.regular);
    } catch (error) {
      console.error(error);
      setPhotoUrl(photo);
    }
  };

  return {
    photoUrl,
    getRandomPhoto,
  };
};
