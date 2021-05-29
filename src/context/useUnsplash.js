import { createContext, useContext, useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { getKeywords } from 'utils/localStorage';
import photo from 'photo.jpg';

export const unsplashContext = createContext();

export const useUnsplash = () => {
  return useContext(unsplashContext);
};

export const useProvideUnsplash = () => {
  const initialState = {
    id: '',
    name: '',
    location: '',
    avatar: '',
    photoUrl: null,
    thumbnail: null,
    unsplashLink: '',
    profileLink: '',
    downloadLink: '',
  };
  const [data, setData] = useState(initialState);
  const [keywords, setKeywords] = useState([]);
  const [share, setShare] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (getKeywords) {
      setKeywords(getKeywords);
    }

    // eslint-disable-next-line
  }, []);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (query) => {
    try {
      const { response } = await unsplash.photos.getRandom({
        query,
        featured: true,
      });

      // console.log(response);

      setData({
        id: response.id,
        name: response.user.name,
        location: response.user.location,
        avatar: response.user.profile_image.medium,
        photoUrl: response.urls.regular,
        thumbnail: response.urls.thumb,
        unsplashLink: response.links.html,
        profileLink: response.user.links.html,
        downloadLink: response.links.download,
      });
    } catch (error) {
      console.error('error occurred: ', error);
      setData({
        photoUrl: photo,
      });
    }
  };

  // const downloadPhoto = async () => {
  //   const { response } = await unsplash.photos.trackDownload({
  //     downloadLocation: data.downloadLink,
  //   });

  //   console.log(response);

  //   return response.url;
  // };

  return {
    data,
    keywords,
    share,
    downloaded,
    setKeywords,
    setShare,
    setDownloaded,
    getRandomPhoto,
    // downloadPhoto,
  };
};
