import { useContext, useState } from 'react';
import { createApi } from 'unsplash-js';
import { context } from './context';

export const useUnsplash = () => {
  return useContext(context);
};

export const useProvideUnsplash = () => {
  const [photoUrl, setPhotoUrl] = useState(null);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (value) => {
    const { response } = await unsplash.photos.getRandom({
      query: value,
    });

    setPhotoUrl(response.urls.regular);
  };

  return {
    photoUrl,
    getRandomPhoto,
  };
};
