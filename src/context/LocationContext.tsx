import { createContext, useContext } from "react";
import type { WeatherLocation } from "../types/weatherApi.types";

export interface LocationContextType {
  selectedCity: WeatherLocation | null;
  selectCity: (city: WeatherLocation) => void;
  findMyLocation: () => Promise<void>;
}

export const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const useLocation = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationProvider");
  }

  return context;
};
