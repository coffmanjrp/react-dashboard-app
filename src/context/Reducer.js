import {
  SET_PHOTOS,
  SET_HOURS,
  SET_MINUTES,
  SET_SECONDS,
  SET_DATE,
  SET_LOADING,
} from './type';

export default function Reducer(state, action) {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case SET_HOURS:
      return {
        ...state,
        hours: action.payload,
      };
    case SET_MINUTES:
      return {
        ...state,
        minutes: action.payload,
      };
    case SET_SECONDS:
      return {
        ...state,
        seconds: action.payload,
        loading: false,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
