import type { ForecastData, ForecastItem } from "../types/weatherApi.types";

export const getDailyForecast = (forecast: ForecastData): ForecastItem[] => {
  const days = new Map<string, ForecastItem>();

  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!days.has(date)) {
      days.set(date, item);
    }
  });

  return Array.from(days.values()).slice(0, 5);
};
