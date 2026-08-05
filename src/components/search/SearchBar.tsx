import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchCities } from "../../hooks/useSearchCities";
import type { WeatherLocation } from "../../types/weatherApi.types";
import SearchResults from "./SearchResults";
// import { IoClose } from "react-icons/io5";

interface SearchBarProps {
  onCitySelect: (city: WeatherLocation) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCitySelect }) => {
  const [searchCity, setSearchCity] = useState("");
  const [debouncedCitySearch, setDebouncedCitySearch] = useState("");

  const {
    data: cities,
    isLoading,
    isError,
  } = useSearchCities(debouncedCitySearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCitySearch(searchCity.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchCity]);

  return (
    <form>
      <div className="relative mx-auto max-w-xl">
        <div className="flex items-center rounded-md border border-white/15 px-4 py-5 backdrop-blur-md shadow-lg">
          <FiSearch size={25} className="mr-3 text-muted" />

          <input
            type="text"
            placeholder="Search city..."
            className=" w-full bg-transparent outline-none placeholder-muted"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />

          {isLoading && (
            <div className="ml-3 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          )}
        </div>

        {debouncedCitySearch && !isError && cities && cities.length > 0 && (
          <div className="absolute left-0 top-full z-50 mt-2 w-full">
            <SearchResults cities={cities} onCitySelect={onCitySelect} />
          </div>
        )}

        {isError && (
          <p className="mt-2 text-sm text-red-400">Something went wrong</p>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
