import type {
  ForecastData,
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

  return res.data;
};

// Get the city information from coordinates
export const getLocationFromCoordinates = async (
  lat: number,
  lon: number,
): Promise<WeatherLocation> => {
  const res = await api.get("/geo/1.0/reverse", {
    params: {
      lat,
      lon,
      limit: 1,
    },
  });

  return res.data[0];
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

// Get daily forecast

export const getDailyforecast = async (lat: number, lon: number) => {
  const res = await api.get<ForecastData>("/data/2.5/forecast", {
    params: {
      lat,
      lon,
      units: "metric",
      exclude: "minutely,hourly,alerts",
    },
  });

  return res.data;
};
