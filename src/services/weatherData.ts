import type {
  CurrentWeatherData,
  WeatherLocation,
} from "../types/weatherApi.types";
import { api } from "./weatherApi";

// Get weather data for search cities

export const searchCities = async (
  city: string,
): Promise<WeatherLocation[]> => {
  const res = await api.get<WeatherLocation[]>("/geo/1.0/direct", {
    params: {
      q: city,
    },
  });
  console.log(res.data);
  return res.data;
};

// Get weatherData

export const getWeatherData = async (lat: number, lon: number) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await api.get<CurrentWeatherData>("/data/2.5/weather", {
    params: {
      lat,
      lon,
      units: "metric",
    },
  });

  return res.data;
};
