export default function weatherInfoData(weather, isFahrenheit) {
  const desc =
    weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
  const minMaxTemp = isFahrenheit
    ? `High ${weather.fahrenheit_temp_max}°F / Low ${weather.fahrenheit_temp_min}°F`
    : `High ${weather.celsius_temp_max}°C / Low ${weather.celsius_temp_min}°C`;
  const tempFeelsLike = isFahrenheit
    ? `Feels like ${weather.fahrenheit_feels_like}°F`
    : `Feels like ${weather.celsius_feels_like}°C`;
  const windSpeed = isFahrenheit
    ? `${(weather.wind_speed * 2.237).toFixed(1)} mi/h`
    : `${weather.wind_speed.toFixed(1)} m/s`;

  const sunAppearTime = (time) => {
    const hours = new Date(+time * 1000).getHours();
    const minutes = new Date(+time * 1000).getMinutes();
    const ampm = hours <= 12 ? 'AM' : 'PM';

    return `${hours}:${minutes} ${ampm}`;
  };

  const sunriseTime = sunAppearTime(weather.sunrise);
  const sunsetTime = sunAppearTime(weather.sunset);

  const information = [
    `${weather.city}, ${weather.country}`,
    `${desc}`,
    minMaxTemp,
    tempFeelsLike,
    `Wind Speed ${windSpeed}`,
    `Humidity ${weather.humidity}%`,
    `Sunrise at ${sunriseTime}`,
    `Sunset at ${sunsetTime}`,
  ];

  return information;
}
