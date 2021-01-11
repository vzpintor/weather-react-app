import React, { useState } from "react";
import { AddCity } from "./componentes/AddCity";
import { CityGrid } from "./componentes/CityGrid";

export const CitiesApp = () => {
  const [cities, setCities] = useState(["Mexico"]);

  return (
    <div className="container">
      <h2>Cities App</h2>
      <AddCity setCities={setCities} />
      <hr />

      {cities.map((city) => (
        <CityGrid key={city} city={city} />
      ))}
    </div>
  );
};
