export default function weatherInfoData(weather, isFahrenheit) {
  const minMaxTemp = isFahrenheit
    ? `Max ${weather.fahrenheit_temp_max}°F / Min ${weather.fahrenheit_temp_min}°F`
    : `Max ${weather.celsius_temp_max}°C / Min ${weather.celsius_temp_min}°C`;
  const tempFeelsLike = isFahrenheit
    ? `Feels like ${weather.fahrenheit_feels_like}°F`
    : `Feels like ${weather.celsius_feels_like}°C`;

  const sunAppearTime = (time) => {
    return `${new Date(+time * 1000).getHours()}:${new Date(
      +time * 1000
    ).getMinutes()}`;
  };

  const sunriseTime = sunAppearTime(weather.sunrise);
  const sunsetTime = sunAppearTime(weather.sunset);

  const information = [
    `${weather.description}`,
    `${weather.city}, ${weather.country}`,
    minMaxTemp,
    `Humidity ${weather.humidity}%`,
    tempFeelsLike,
    `Sunrise at ${sunriseTime} AM`,
    `Sunset at ${sunsetTime} PM`,
  ];

  return information;
}
