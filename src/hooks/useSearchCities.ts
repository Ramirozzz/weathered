import { useQuery } from "@tanstack/react-query";
import type { WeatherLocation } from "../types/weatherApi.types";
import { searchCities } from "../services/weatherData";

export const useSearchCities = (city: string) => {
  return useQuery<WeatherLocation[]>({
    queryKey: ["seacrhCities", { city }],
    queryFn: () => searchCities(city),
    enabled: !!city,
  });
};
