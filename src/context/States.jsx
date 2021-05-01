import { useReducer } from 'react';
import { Context, Reducer } from './';
import {
  SET_PHOTOS,
  SET_HOURS,
  SET_MINUTES,
  SET_SECONDS,
  SET_DATE,
  SET_LOADING,
} from './type';

export default function States({ children }) {
  const initialState = {
    photos: null,
    hours: null,
    minutes: null,
    seconds: null,
    date: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const setPhotos = (photo) => dispatch({ type: SET_PHOTOS, payload: photo });

  const setHours = (hour) => dispatch({ type: SET_HOURS, payload: hour });

  const setMinutes = (minute) =>
    dispatch({ type: SET_MINUTES, payload: minute });

  const setSeconds = (second) =>
    dispatch({ type: SET_SECONDS, payload: second });

  const setDate = (date) => dispatch({ type: SET_DATE, payload: date });

  const setLoading = (loading) =>
    dispatch({ type: SET_LOADING, payload: loading });

  return (
    <Context.Provider
      value={{
        photos: state.photos,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        date: state.date,
        loading: state.loading,
        setPhotos,
        setHours,
        setMinutes,
        setSeconds,
        setDate,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
