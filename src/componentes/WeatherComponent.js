import React from "react";

export const WeatherComponent = (weather ) => {
  console.log(weather);

  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.weather}
      />
    </div>
  );
};
