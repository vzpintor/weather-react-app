import { useState, useEffect } from "react";
import { getWeather } from "../helpers/getWeather";

export const useFetchWeather = (city) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getWeather(city).then((response) => {
      setState({
        data: response,
        loading: false,
      });
    });
  }, [city]);

  return state;
};
