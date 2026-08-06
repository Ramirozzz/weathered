import { useQuery } from "@tanstack/react-query";
import type { ForecastData } from "../types/weatherApi.types";
import { getDailyforecast } from "../services/weatherData";

export const useForecast = (lat: number, lon: number) => {
  return useQuery<ForecastData>({
    queryKey: ["forecast", { lat, lon }],
    queryFn: () => getDailyforecast(lat, lon),
    enabled: !!lat && !!lon,
  });
};
