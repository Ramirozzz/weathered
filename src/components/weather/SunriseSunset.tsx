import type { CurrentWeatherData } from "../../types/weatherApi.types";
import { formatTime } from "../../helpers/date";
import { BsSunriseFill, BsSunsetFill } from "react-icons/bs";

interface SunriseSunsetProps {
  data: CurrentWeatherData;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({ data }) => {
  const now = Date.now() / 1000;

  const daylightProgress =
    ((now - data.sys.sunrise) / (data.sys.sunset - data.sys.sunrise)) * 100;
  const progress = Math.min(Math.max(daylightProgress, 0), 100);

  return (
    <section className="section">
      <h2 className="text-sm text-text tracking-[0.3em] uppercase mb-4">
        Sun & Moon
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="border border-border bg-card-bg p-5 rounded-xl">
          <p className="text-xs text-muted uppercase tracking-[0.2em]">
            Sunrise
          </p>

          <p className="text-xl md:text-2xl text-text font-light mt-2">
            {formatTime(data.sys.sunrise)}
          </p>
        </div>

        <div className="border border-border bg-card-bg p-5 rounded-xl">
          <p className="text-xs text-muted uppercase tracking-[0.2em]">
            Sunset
          </p>

          <p className="text-xl md:text-2xl text-text font-light mt-2">
            {formatTime(data.sys.sunset)}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="h-[2px] bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c8a96e]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-2">
            <BsSunriseFill color="#FBBF24" size={20} />
            <span className="text-xs text-muted">Sunrise</span>
          </div>
          <span className="text-xs text-muted tracking-[0.1em]">Daylight</span>
          <div className="flex items-center gap-2">
            <BsSunsetFill color="#FB923C" size={20} />
            <span className="text-xs text-muted">Sunset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SunriseSunset;
