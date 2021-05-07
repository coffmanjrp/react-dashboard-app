import { createContext, useContext, useState } from 'react';
import { createApi } from 'unsplash-js';
import photo from 'photo.jpg';

export const unsplashContext = createContext();

export const useUnsplash = () => {
  return useContext(unsplashContext);
};

export const useProvideUnsplash = () => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [authorInfo, setAuthorInfo] = useState({
    name: 'Sarah Kilian',
    location: 'leeds',
    userPage: 'https://unsplash.com/@rojekilian',
    image:
      'https://images.unsplash.com/profile-1553374303036-d6e5e50117cc?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
  });

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (query) => {
    try {
      const { response } = await unsplash.photos.getRandom({
        query,
      });

      // console.log(response);

      setAuthorInfo({
        name: response.user.name,
        location: response.user.location,
        link: response.user.links.html,
        image: response.user.profile_image.medium,
      });
      setPhotoUrl(response.urls.regular);
    } catch (error) {
      console.error(error);
      setPhotoUrl(photo);
    }
  };

  return {
    photoUrl,
    authorInfo,
    getRandomPhoto,
  };
};
