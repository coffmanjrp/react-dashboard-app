import { createContext, useContext, useEffect, useState } from 'react';
import { SkyconsType } from 'react-skycons';

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
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const kelvin = 273.16;
  let skycon;

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchWeatherData(lat, lon);
    });

    // eslint-disable-next-line
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
      );
      const data = await res.json();

      switchSkycons(data.weather[0].icon);
      setWeather({
        id: data.id,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        skycon,
        celsius: Math.round(data.main.temp - kelvin),
        fahrenheit: Math.round(((data.main.temp - kelvin) * 9) / 5 + 32),
      });
    } catch (error) {
      console.error('error occurred: ', error);
    }
  };

  const switchSkycons = (icon) => {
    switch (icon) {
      case '01d':
        skycon = SkyconsType.CLEAR_DAY;
        break;
      case '01n':
        skycon = SkyconsType.CLEAR_NIGHT;
        break;
      case '02d':
        skycon = SkyconsType.PARTLY_CLOUDY_DAY;
        break;
      case '02n':
        skycon = SkyconsType.PARTLY_CLOUDY_NIGHT;
        break;
      case '03d':
        skycon = SkyconsType.CLOUDY;
        break;
      case '03n':
        skycon = SkyconsType.CLOUDY;
        break;
      case '04d':
        skycon = SkyconsType.CLOUDY;
        break;
      case '04n':
        skycon = SkyconsType.CLOUDY;
        break;
      case '09d':
        skycon = SkyconsType.SLEET;
        break;
      case '09n':
        skycon = SkyconsType.SLEET;
        break;
      case '10d':
        skycon = SkyconsType.RAIN;
        break;
      case '10n':
        skycon = SkyconsType.RAIN;
        break;
      case '11d':
        skycon = SkyconsType.RAIN;
        break;
      case '11n':
        skycon = SkyconsType.RAIN;
        break;
      case '13d':
        skycon = SkyconsType.SNOW;
        break;
      case '13n':
        skycon = SkyconsType.SNOW;
        break;
      case '50d':
        skycon = SkyconsType.FOG;
        break;
      case '50n':
        skycon = SkyconsType.FOG;
        break;
      default:
        return false;
    }
  };

  return { weather };
};
