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
  // const date = new Date((data.dt + data.timezone) * 1000);
  const condition = data.weather[0];

  return (
    <section className="section relative z-10 min-h-[500px] md:min-h-[400px] animate-fade-up-1 pt-50">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-0 md:gap-8 ">
        <div className="flex flex-col items-center md:items-start gap-3 md:gap-6">
          <p className="text-sm md:text-base text-muted font-normal tracking-[0.1em]">
            {/* {date.toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })} */}
            Right now
          </p>

          <h1 className="font-light leading-none tracking-tight">
            {city.name}
            <span className="ml-3">{data.sys.country}</span>
          </h1>

          <div className="drop-shadow-[0_0_12px_rgba(184,212,232,0.4)]">
            <WeatherCondition data={condition} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-text font-light text-[clamp(5rem,12vw,9rem)]">
            {Math.round(data.main.temp)}
            <sup className="text-3xl md:text-[0.28em] align-super text-accent">
              °C
            </sup>
          </div>
          <div className="flex flex-col items-center -mt-4 gap-3 text-sm text-muted">
            <span className="flex items-center gap-2 text-lg">
              Feels like:
              <span>{Math.round(data.main.feels_like)}°</span>
            </span>
            <div className="flex gap-4">
              <span className="text-accent">
                H{" "}
                <span className="text-text pl-1">
                  {Math.round(data.main.temp_max)}°
                </span>
              </span>

              <span className="text-accent">
                L{" "}
                <span className="text-text pl-1">
                  {Math.round(data.main.temp_min)}°
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
