import { useLocation } from "../../context/LocationContext";
import SearchBar from "../search/SearchBar";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const { findMyLocation } = useLocation();

  return (
    <section className="relative h-dvh md:h-screen animate-fade-in">
      <div className="relative z-10 flex h-full items-center justify-center px-4 md:px-8 lg:px-30 lg:pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6">Daily Weather Forecast</h1>

          <p className="mx-auto mb-8 md:mb-10 max-w-sm leading-relaxed md:max-w-2xl md:text-xl">
            Get weathered with real-time forecasts, hourly updates, and weather
            conditions wherever you are.
          </p>

          <div className="relative z-20">
            <SearchBar className="max-w-xl py-3 md:py-4 shadow-lg" />
          </div>

          <div className="relative z-10 mt-10">
            <button
              type="button"
              onClick={findMyLocation}
              className="mx-auto mt-4 flex items-center gap-2 text-base text-text transition-colors hover:text-muted"
            >
              <FaLocationArrow size={16} color="var(--color-accent)" />
              Use my location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
