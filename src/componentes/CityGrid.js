import React, { useEffect } from "react";

export const CityGrid = ({ city }) => {
  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Zacatelco&units=metric&lang=es&appid=c5fed460e3771f3d0837f28d01d341fd`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <h3 key={city}> {city}</h3>
    </div>
  );
};
