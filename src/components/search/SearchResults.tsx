import React from "react";
import type { WeatherLocation } from "../../types/weatherApi.types";

interface SearchResultsProps {
  cities: WeatherLocation[];
  onCitySelect: (city: WeatherLocation) => void;
}
const SearchResults: React.FC<SearchResultsProps> = ({
  cities,
  onCitySelect,
}) => {
  return (
    <div>
      {cities && cities.length > 0 && (
        <div>
          {cities.map((city) => (
            <button
              key={`${city.lat}-${city.lon}`}
              onClick={() => onCitySelect(city)}
              className="flex w-full items-center px-4 py-3 text-left text-text transition-colors hover:bg-white/10"
            >
              <span>
                {city.name}, {city.country}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
