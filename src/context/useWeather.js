import { createContext, useContext, useEffect, useState } from 'react';

export const weatherContext = createContext();

export const useWeather = () => {
  return useContext(weatherContext);
};

export const useProvideWeather = () => {
  const initialData = {
    id: '',
    city: '',
    country: '',
    description: '',
    icon: '',
    celsius: 0,
    fahrenheit: 0,
  };
  const [weather, setWeather] = useState(initialData);
  const kelvin = 273.16;

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (position) => {
      const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
      );
      const data = await res.json();

      setWeather({
        id: data.id,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        celsius: Math.round(data.main.temp - kelvin),
        fahrenheit: Math.round(((data.main.temp - kelvin) * 9) / 5 + 32),
      });
    });
  }, []);

  return [weather, setWeather];
};
