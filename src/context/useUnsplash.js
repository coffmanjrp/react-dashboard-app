import { createContext, useContext, useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import imageToBase64 from 'image-to-base64/browser';
import { getSettings, setObjectToLocalStorage } from 'utils/localStorage';
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
    photoUrlEncoded: null,
    thumbnail: null,
    unsplashLink: '',
    profileLink: '',
    downloadLink: '',
  };

  const [data, setData] = useState(initialState);
  const [keywords, setKeywords] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const newKeywords = getSettings?.keywords?.map((keyword) =>
      keyword.replace(/-/g, ' ')
    );

    if (getSettings?.keywords === undefined) setKeywords([]);
    else setKeywords(newKeywords);
    if (getSettings?.history === undefined) setHistory('');
    else setHistory(getSettings?.history);
    if (getSettings) getRandomPhoto(getSettings?.keywords);
    else getRandomPhoto();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data.id !== '') {
      getHistoryData(data);
    }

    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    removeOldHistory(25);
    setObjectToLocalStorage('settings', 'history', history);

    // eslint-disable-next-line
  }, [history]);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const getRandomPhoto = async (query) => {
    try {
      const { response } = await unsplash.photos.getRandom({
        query,
      });
      const encoded = await convertImageIntoBase64(response.urls.regular);

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
        photoUrlEncoded: encoded,
        thumbnail: response.urls.thumb,
        unsplashLink: response.links.html,
        profileLink: response.user.links.html,
        downloadLink: response.urls.raw,
      });
    } catch (error) {
      console.error('error occurred:', error.message);
      setData(
        errorScreenData[Math.floor(Math.random() * errorScreenData.length)]
      );
    }
  };

  const getPhotoById = async (photoId) => {
    try {
      const { response } = await unsplash.photos.get({
        photoId,
      });
      const encoded = await convertImageIntoBase64(response.urls.regular);

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
        photoUrlEncoded: encoded,
        thumbnail: response.urls.thumb,
        unsplashLink: response.links.html,
        profileLink: response.user.links.html,
        downloadLink: response.links.download,
      });
    } catch (error) {
      console.error('error occurred:', error.message);
      return;
    }
  };

  const convertImageIntoBase64 = async (image) => {
    const response = await imageToBase64(image);
    const encoded = await `data:image/jpeg;base64,${response}`;
    return encoded;
  };

  const getHistoryData = (data) => {
    const exists = getSettings?.history?.find((item) => item.id === data.id);

    const dataForHistory = {
      id: data.id,
      description: data.description,
      thumbnail: data.thumbnail,
    };

    if (!exists) {
      setHistory([dataForHistory, ...history]);
    }
  };

  const removeOldHistory = (limit) => {
    if (history?.length > limit) {
      setHistory([...history.slice(0, history.length - 1)]);
    }
  };

  return {
    data,
    keywords,
    history,
    setKeywords,
    setHistory,
    getRandomPhoto,
    getPhotoById,
    getHistoryData,
  };
};
