import type { ForecastData } from "../../types/weatherApi.types";
import { getDailyForecast } from "../../helpers/forecast";
import { formatForecastDay } from "../../helpers/date";

interface DailyForecastProps {
  forecast: ForecastData;
  onDaySelect: (date: string) => void;
  selectedDay: string | null;
}

const DailyForecast: React.FC<DailyForecastProps> = ({
  forecast,
  onDaySelect,
  selectedDay,
}) => {
  const dailyForecast = getDailyForecast(forecast);

  return (
    <div className="animate-fade-up-3 ">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {dailyForecast.map((day) => {
          const dayDate = day.dt_txt.split(" ")[0];
          const isActive = dayDate === selectedDay;

          return (
            <div
              key={day.dt}
              onClick={() => onDaySelect(dayDate)}
              className={`relative overflow-hidden p-4 text-center border rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer group
              ${isActive ? "border-white/20 bg-white/8" : "border-border   "}`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,#c8a96e,#7a91b0)] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,#c8a96e,#7a91b0)] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              <></>
              <div className=" text-xs tracking-[0.2em] uppercase">
                {formatForecastDay(day.dt)}
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
              </div>
              <div className="text-xl md:text-2xl font-light tracking-tight">
                {Math.round(day.main.temp)}

                <sup className="text-sm text-accent"> °C</sup>
              </div>
              <div className=" text-sm text-muted mt-3">
                {day.weather[0].description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
