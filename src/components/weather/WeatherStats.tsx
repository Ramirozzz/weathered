import type { CurrentWeatherData } from "../../types/weatherApi.types";

interface WeatherStatsprops {
  data: CurrentWeatherData;
}
const WeatherStats: React.FC<WeatherStatsprops> = ({ data }) => {
  const stats = [
    {
      label: "Feels Like",
      value: Math.round(data.main.feels_like),
      unit: "°C",
    },
    {
      label: "Humidity",
      value: data.main.humidity,
      unit: "%",
    },
    {
      label: "Wind",
      value: Math.round(data.wind.speed),
      unit: "m/s",
    },
    {
      label: "Pressure",
      value: data.main.pressure,
      unit: "hPa",
    },
    {
      label: "Clouds",
      value: data.clouds.all,
      unit: "%",
    },
    {
      label: "Visibility",
      value: (data.visibility / 1000).toFixed(1),
      unit: "km",
    },
  ];

  return (
    <section className="section animate-fade-up-2">
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {stats.map(({ label, value, unit }) => (
          <div
            key={label}
            className="border border-border rounded-xl px-4 py-3 md:py-4 bg-card-bg backdrop-blur-sm transition-all duration-300 "
          >
            <div className="text-xs text-muted tracking-[0.25em] font-secondary uppercase mb-2 md:mb-3">
              {label}
            </div>
            <div className="text-xl md:text-3xl text-text font-light tracking-tight">
              {value} <sup className="text-sm text-accent ">{unit}</sup>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherStats;
