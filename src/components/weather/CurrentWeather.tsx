import React from "react";
import type {
  CurrentWeatherData,
  WeatherLocation,
} from "../../types/weatherApi.types";
import WeatherCondition from "./WeatherCondition";

interface CurrentWeatherProps {
  data: CurrentWeatherData;
  city: WeatherLocation;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, city }) => {
  const date = new Date((data.dt + data.timezone) * 1000);
  const condition = data.weather[0];

  return (
    <section className="relative z-10 min-h-[500px] md:min-h-[400px] animate-fade-up-1 pt-50">
      <div className=" flex justify-between items-center gap-8 ">
        <div className="py-8">
          <p className="font-secondary text-muted font-light mb-6 tracking-[0.1em]">
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>

          <h1 className="lg:text-8xl font-light leading-none tracking-tight">
            {city.name}
            <span className="ml-3">{data.sys.country}</span>
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <span className="drop-shadow-[0_0_12px_rgba(184,212,232,0.4)]">
              <WeatherCondition data={condition} />
            </span>
          </div>
        </div>
        <div className="text-left md:text-right ">
          <div className="font-light text-[clamp(5rem,12vw,9rem)] text-text">
            {Math.round(data.main.temp)}
            <sup className=" text-[0.28em] align-super text-accent">°C</sup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
