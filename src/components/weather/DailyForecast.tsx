import React from "react";
import type { ForecastData } from "../../types/weatherApi.types";
import { getDailyForecast } from "../../helpers/forecast";

interface DailyForecastProps {
  forecast: ForecastData;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ forecast }) => {
  const dailyForecast = getDailyForecast(forecast);

  // Get day name from timestamp
  const formatDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    return date.toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  return (
    <section className="section animate-fade-up-3 ">
      <h2 className="text-sm text-text tracking-[0.3em] uppercase mb-4">
        5-Day Outlook
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {dailyForecast.map((day) => (
          <div
            key={day.dt}
            className="relative overflow-hidden p-3 text-center border border-border rounded-sm bg-card-bg backdrop-blur-sm transition-all duration-300 cursor-default group"
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left" />
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              style={{
                background: "linear-gradient(90deg, #c8a96e, #7a91b0)",
              }}
            />
            <></>
            <div className=" text-xs tracking-[0.2em] uppercase mb-2">
              {formatDay(day.dt)}
            </div>{" "}
            <div className="flex justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
            <div className="text-lg font-light tracking-tight">
              {Math.round(day.main.temp)}

              <sup className=" text-sm text-accent "> °C</sup>
            </div>
            <div className=" text-xs text-accent mt-2">
              {day.weather[0].description}
            </div>
            <div className="mt-3 h-[2px] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-1000 ease-out" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyForecast;
