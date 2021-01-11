export const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(
    city
  )}&appid=4141e88d6f7642acd0390d5cba1099ef&units=metric&lang=es`;

  const response = await fetch(url);
  const { list } = await response.json();

  if (!list) {
    return [];
  }
  return list.map((weather) => {
    return {
      id: weather.dt,
      day: weather.dt_txt,
      temperature: weather.main.temp,
      humidity: weather.main.humidity,
      icon: weather.weather[0].icon,
      description: weather.weather[0].description,
      weather: weather.weather[0].main,
    };
  });
};
