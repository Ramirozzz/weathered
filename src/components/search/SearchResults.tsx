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
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-accent/15 shadow-xl backdrop-blur-3xl">
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
