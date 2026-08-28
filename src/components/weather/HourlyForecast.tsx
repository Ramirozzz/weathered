import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import type { ForecastItem } from "./../../types/weatherApi.types";
import { formatForecastDateTime } from "../../helpers/date";
import "../../components/weather/swiperSlider.css";

interface HourlyForecastProps {
  hourly: ForecastItem[];
}

// Formats date-time string to display only the time
const formatTime = (dateTime: string) => {
  return dateTime.split(" ")[1].slice(0, 5);
};

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly }) => {
  return (
    <div className="pt-10">
      <h2 className="text-xs text-text font-normal tracking-[0.2em] uppercase mb-4">
        3-Hour Forecast •{" "}
        <span className="text-text font-normal">
          {hourly.length > 0 && formatForecastDateTime(hourly[0].dt_txt)}
        </span>
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        followFinger={true}
        speed={600}
        className="mySwiper "
        breakpoints={{
          320: {
            // Mobile
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 8,
          },
          640: {
            // tablets
            slidesPerView: 4.5,
            slidesPerGroup: 4,
            spaceBetween: 12,
          },
          1024: {
            // Desktop
            slidesPerView: 6.3,
            slidesPerGroup: 6,
            spaceBetween: 12,
          },
        }}
      >
        {hourly.map((hour, index) => (
          <SwiperSlide key={hour.dt}>
            <div
              className="relative overflow-hidden p-3 text-center border border-border rounded-xl backdrop-blur-sm animate-fade-up-1"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <p className="text-xs text-muted mb-2">
                {formatTime(hour.dt_txt)}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt={hour.weather[0].description}
                className="mx-auto w-14 h-14"
              />

              <p className="text-lg text-text font-light ">
                {Math.round(hour.main.temp)}{" "}
                <sup className="text-accent">°C</sup>
              </p>

              <p className="text-xs text-muted capitalize mt-2">
                {hour.weather[0].description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HourlyForecast;
