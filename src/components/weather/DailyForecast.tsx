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
    <section className="section animate-fade-up-3 ">
      <h2 className="text-sm text-text tracking-[0.3em] uppercase mb-4">
        5-Day Outlook
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {dailyForecast.map((day) => {
          const dayDate = day.dt_txt.split(" ")[0];
          const isActive = dayDate === selectedDay;

          return (
            <div
              key={day.dt}
              onClick={() => onDaySelect(dayDate)}
              className={`relative overflow-hidden p-5 text-center border rounded-sm backdrop-blur-sm transition-all duration-300 cursor-pointer group
              ${isActive ? "border-border bg-white/8" : "border-border bg-card-bg  "}`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,#c8a96e,#7a91b0)] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,#c8a96e,#7a91b0)] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
              <></>
              <div className=" text-xs tracking-[0.2em] uppercase mb-2">
                {formatForecastDay(day.dt)}
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt={day.weather[0].description}
                />
              </div>
              <div className="text-2xl font-light tracking-tight">
                {Math.round(day.main.temp)}

                <sup className="text-sm text-accent"> °C</sup>
              </div>
              <div className=" text-xs text-muted mt-2">
                {day.weather[0].description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DailyForecast;
