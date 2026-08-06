import type { CurrentWeatherData } from "../../types/weatherApi.types";

interface WeatherStatsprops {
  data: CurrentWeatherData;
}
const WeatherStats: React.FC<WeatherStatsprops> = ({ data }) => {
  const stats = [
    {
      label: "Tempreture",
      value: Math.round(data.main.temp),
      unit: "°C",
    },
    {
      label: "Max tempreture",
      value: Math.round(data.main.temp_max),
      unit: "°C",
    },
    {
      label: "Min tempreture",
      value: Math.round(data.main.temp_min),
      unit: "°C",
    },
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
    <section className="section grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 py-15 gap-3">
      {stats.map(({ label, value, unit }) => (
        <div className=" border border-border rounded-sm p-4 bg-card-bg backdrop-blur-sm transition-all duration-300 ">
          <div className="text-xs text-muted tracking-[0.25em] font-secondary uppercase mb-2">
            {label}
          </div>
          <div className="text-2xl text-text font-light tracking-tight">
            {value} <span className="text-lg text-accent ">{unit}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeatherStats;
