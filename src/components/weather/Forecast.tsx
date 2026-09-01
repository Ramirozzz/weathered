import type { ForecastData, ForecastItem } from "../../types/weatherApi.types";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

interface ForecastProps {
  forecast: ForecastData;
  onDaySelect: (date: string) => void;
  selectedDay: string | null;
  hourly: ForecastItem[];
}

const Forecast: React.FC<ForecastProps> = ({
  forecast,
  onDaySelect,
  selectedDay,
  hourly,
}) => {
  return (
    <section className="section">
      <h2 className="text-sm text-text tracking-[0.3em] uppercase mb-4">
        5-Day Outlook
      </h2>
      <div className="bg-card-bg backdrop-blur-sm border border-border rounded-xl px-4 py-8">
        <DailyForecast
          forecast={forecast}
          onDaySelect={onDaySelect}
          selectedDay={selectedDay}
        />
        <HourlyForecast key={selectedDay} hourly={hourly} />
      </div>
    </section>
  );
};

export default Forecast;
