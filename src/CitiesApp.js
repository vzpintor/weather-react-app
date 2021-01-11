import React, { useState } from "react";
import { AddCity } from "./componentes/AddCity";
import { CityGrid } from "./componentes/CityGrid";

export const CitiesApp = () => {
  const [cities, setCities] = useState(["Mexico"]);

  // const handleAdd = () => {
  //   // setCities(["Otra", ...cities]);
  //   setCities((city) => [...city, "Guadalajara"]);
  //   console.log(cities);
  // };

  return (
    <>
      <h2>Cities App</h2>
      <AddCity setCities={setCities} />
      <hr />

      <ol>
        {cities.map((city) => (
          <CityGrid key={city} city={city} />
        ))}
      </ol>
    </>
  );
};
