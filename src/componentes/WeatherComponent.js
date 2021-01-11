import React from "react";

export const WeatherComponent = (weather) => {
  console.log(weather);

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 p-2">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row p-1">
            <div>
              <p>{weather.day}</p>
              <small>{weather.weather}</small>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.weather}
              />
            </div>
            <div className="col">{weather.temperature}&deg;</div>
          </div>
          <div className="card-footer text-muted text-capitalize">{weather.description}</div>
        </div>
      </div>
    </div>
  );
};
