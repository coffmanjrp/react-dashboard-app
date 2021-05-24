export default function weatherInfoData(weather, isFahrenheit) {
  const minMaxTemp = isFahrenheit
    ? `Max ${weather.fahrenheit_temp_max}°F / Min ${weather.fahrenheit_temp_min}°F`
    : `Max ${weather.celsius_temp_max}°C / Min ${weather.celsius_temp_min}°C`;
  const tempFeelsLike = isFahrenheit
    ? `Feels like ${weather.fahrenheit_feels_like}°F`
    : `Feels like ${weather.celsius_feels_like}°C`;

  const sunAppearTime = (time) => {
    const hours = new Date(+time * 1000).getHours();
    const minutes = new Date(+time * 1000).getMinutes();
    const ampm = hours <= 12 ? 'AM' : 'PM';

    return `${hours}:${minutes} ${ampm}`;
  };

  const sunriseTime = sunAppearTime(weather.sunrise);
  const sunsetTime = sunAppearTime(weather.sunset);

  const information = [
    `${weather.description}`,
    `${weather.city}, ${weather.country}`,
    minMaxTemp,
    `Humidity ${weather.humidity}%`,
    tempFeelsLike,
    `Sunrise at ${sunriseTime}`,
    `Sunset at ${sunsetTime}`,
  ];

  return information;
}
