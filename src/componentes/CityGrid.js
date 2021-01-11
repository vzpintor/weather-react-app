import React from "react";
import { useFetchWeather } from "../hooks/useFetchWeathers";
import { WeatherComponent } from "./WeatherComponent";

export const CityGrid = ({ city }) => {
  const { data: weathers, loading } = useFetchWeather(city);

  return (
    <>
      <h3>
        Climas para: <span className="border-bottom">{city}</span>
      </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="row">
        {weathers.map((weather) => (
          <WeatherComponent key={weather.id} {...weather} />
        ))}
      </div>
    </>
  );
};
