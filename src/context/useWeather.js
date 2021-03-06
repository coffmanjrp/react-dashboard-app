import { createContext, useContext, useEffect, useState } from 'react';
import { SkyconsType } from 'react-skycons';
import { getSettings } from 'utils/localStorage';

export const weatherContext = createContext();

export const useWeather = () => {
  return useContext(weatherContext);
};

export const useProvideWeather = () => {
  const API_URL = process.env.REACT_APP_OPEN_WEATHER_API_URL;
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const kelvin = 273.16;
  let skycon;
  const initialWeatherData = {
    id: '',
    city: '',
    country: '',
    description: '',
    icon: '',
    skycon: '',
    celsius_temp: '',
    fahrenheit_temp: '',
    celsius_temp_max: '',
    fahrenheit_temp_max: '',
    celsius_temp_min: '',
    fahrenheit_temp_min: '',
    celsius_feels_like: '',
    fahrenheit_feels_like: '',
    humidity: '',
    sunrise: '',
    sunset: '',
    wind_speed: '',
  };
  const initialLocation = getSettings?.location ? getSettings.location : '';
  const [weather, setWeather] = useState(initialWeatherData);
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchWeatherData(lat, lon);
    });

    // eslint-disable-next-line
  }, [location]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const param = !location ? `lat=${lat}&lon=${lon}` : `q=${location}`;

      const res = await fetch(`${API_URL}?${param}&APPID=${API_KEY}`);
      const data = await res.json();

      switchSkycons(data.weather[0].icon);
      setWeather({
        id: data.id,
        city: data.name,
        timestamp: data.dt,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        skycon,
        celsius_temp: Math.round(data.main.temp - kelvin),
        fahrenheit_temp: Math.round(((data.main.temp - kelvin) * 9) / 5 + 32),
        celsius_temp_max: Math.round(data.main.temp_max - kelvin),
        fahrenheit_temp_max: Math.round(
          ((data.main.temp_max - kelvin) * 9) / 5 + 32
        ),
        celsius_temp_min: Math.round(data.main.temp_min - kelvin),
        fahrenheit_temp_min: Math.round(
          ((data.main.temp_min - kelvin) * 9) / 5 + 32
        ),
        celsius_feels_like: Math.round(data.main.feels_like - kelvin),
        fahrenheit_feels_like: Math.round(
          ((data.main.feels_like - kelvin) * 9) / 5 + 32
        ),
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        wind_speed: data.wind.speed,
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

  return {
    weather,
    location,
    setLocation,
  };
};
