import { useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

import { LocationContext } from "./LocationContext";
import type { WeatherLocation } from "../types/weatherApi.types";
import { getCurrentLocation } from "../helpers/geolocation";
import { getLocationFromCoordinates } from "../services/weatherData";

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const [, setSearchParams] = useSearchParams();

  const [selectedCity, setSelectedCity] = useState<WeatherLocation | null>(
    null,
  );

  const selectCity = (city: WeatherLocation) => {
    setSelectedCity(city);

    setSearchParams({
      city: city.name,
    });
  };

  const findMyLocation = async () => {
    try {
      const coordinates = await getCurrentLocation();

      const location = await getLocationFromCoordinates(
        coordinates.latitude,
        coordinates.longitude,
      );

      selectCity(location);
    } catch (error) {
      console.error("Couldn't get location:", error);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        selectedCity,
        selectCity,
        findMyLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
