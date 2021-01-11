import React, { useEffect, useState } from "react";
import { WeatherComponent } from "./WeatherComponent";

export const CityGrid = ({ city }) => {
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=Mexico&appid=4141e88d6f7642acd0390d5cba1099ef&units=metric&lang=es`;

    const response = await fetch(url);
    const { list } = await response.json();

    const climates = list.map((weather) => {
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

    setWeathers(climates);
  };

  return (
    <div>
      {weathers.map((weather) => (
        <WeatherComponent key={weather.id} {...weather} />
      ))}
    </div>
  );
};
