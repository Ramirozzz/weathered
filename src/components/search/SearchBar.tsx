import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchCities } from "../../hooks/useSearchCities";
import { useLocation } from "../../context/LocationContext";
import SearchResults from "./SearchResults";

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const { selectCity } = useLocation();
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

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (isLoading || !cities?.length) return;

    selectCity(cities[0]);
    setSearchCity("");
    setDebouncedCitySearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mx-auto max-w-xl  ">
        <div
          className={`relative z-30 flex items-center border border-white/15 rounded-md backdrop-blur-md px-4 ${className}`}
        >
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
          <div className="absolute left-0 top-full z-40 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-accent/20 shadow-xl backdrop-blur-xl ">
            <SearchResults
              cities={cities}
              onCitySelect={(city) => {
                selectCity(city);
                setSearchCity("");
                setDebouncedCitySearch("");
              }}
            />
          </div>
        )}

        {debouncedCitySearch && !isError && cities && cities.length === 0 && (
          <p className="absolute left-0 top-full mt-2 text-sm font-light tracking-wider text-red-400">
            City not found. Please try another city name
          </p>
        )}

        {isError && (
          <p className="mt-2 text-sm text-red-400">Something went wrong</p>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
