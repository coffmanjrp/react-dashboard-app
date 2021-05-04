import React, { createContext, useContext, useState } from 'react';
import { createApi } from 'unsplash-js';

const unsplashContext = createContext();

export const UnsplashProvider = ({ children }) => {
  const unsplash = useProvideUnsplash();
  return (
    <unsplashContext.Provider value={unsplash}>
      {children}
    </unsplashContext.Provider>
  );
};

export const useUnsplash = () => {
  return useContext(unsplashContext);
};

const useProvideUnsplash = () => {
  const [photos, setPhotos] = useState(null);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (value) => {
    const { response } = await unsplash.photos.getRandom({
      query: value,
    });

    setPhotos(response.urls.regular);
  };

  return {
    photos,
    getRandomPhoto,
  };
};
