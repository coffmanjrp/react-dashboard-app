import { createContext, useContext, useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import { getKeywords, getSettings } from 'utils/localStorage';
import { errorScreenData } from 'utils/errorScreenData';

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
    description: '',
    photoUrl: null,
    photoUrlFull: null,
    photoUrlSmall: null,
    photoUrlRaw: null,
    thumbnail: null,
    unsplashLink: '',
    profileLink: '',
    downloadLink: '',
  };
  const [data, setData] = useState(initialState);
  const [keywords, setKeywords] = useState([]);
  const [share, setShare] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [alpha, setAlpha] = useState(+getSettings.background);

  useEffect(() => {
    const newKeywords = getKeywords.map((keyword) =>
      keyword.replace(/-/g, ' ')
    );

    if (getKeywords) {
      setKeywords(newKeywords);
    }

    if (!getSettings.background) {
      setAlpha(10);
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
        // featured: true,
      });

      // console.log(response);

      setData({
        id: response.id,
        name: response.user.name,
        location: response.user.location,
        avatar: response.user.profile_image.medium,
        description: response.alt_description,
        photoUrl: response.urls.regular,
        photoUrlFull: response.urls.full,
        photoUrlSmall: response.urls.small,
        photoUrlRaw: response.urls.raw,
        thumbnail: response.urls.thumb,
        unsplashLink: response.links.html,
        profileLink: response.user.links.html,
        downloadLink: response.links.download,
      });
    } catch (error) {
      console.error('error occurred:', error.message);
      setData(
        errorScreenData[Math.floor(Math.random() * errorScreenData.length)]
      );
    }
  };

  return {
    data,
    keywords,
    share,
    downloaded,
    alpha,
    setKeywords,
    setShare,
    setDownloaded,
    setAlpha,
    getRandomPhoto,
  };
};
