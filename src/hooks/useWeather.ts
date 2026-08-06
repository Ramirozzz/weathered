import { useQuery } from "@tanstack/react-query";
import type { CurrentWeatherData } from "../types/weatherApi.types";
import { getWeatherData } from "../services/weatherData";

export const useWeather = (lat: number, lon: number) => {
  return useQuery<CurrentWeatherData>({
    queryKey: ["weather", { lat, lon }],
    queryFn: () => getWeatherData(lat!, lon!),
    enabled: !!lat && !!lon,
  });
};
