import type { WeatherLocation } from "../../types/weatherApi.types";
import Button from "../buttons/Button";
import SearchBar from "../search/SearchBar";

interface HeroProps {
  onCitySelect: (city: WeatherLocation) => void;
}

const Hero: React.FC<HeroProps> = ({ onCitySelect }) => {
  return (
    <section className="relative h-[720px] overflow-hidden md:h-screen">
      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-8 md:px-8 lg:px-30 lg:pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6">Your Daily Weather</h1>

          <p className="mx-auto max-w-sm md:max-w-2xl text-xl leading-relaxed mb-12 ">
            Get weathered with real-time forecasts, hourly updates, and weather
            conditions wherever you are.
          </p>
          <SearchBar onCitySelect={onCitySelect} />
          <div className="mt-10 ">
            <Button title="Find my location" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
