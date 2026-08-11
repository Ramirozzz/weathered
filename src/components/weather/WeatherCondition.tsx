import React from "react";
import type { Weather } from "../../types/weatherApi.types";

interface WeatherConditionProps {
  data: Weather;
}

const WeatherCondition: React.FC<WeatherConditionProps> = ({ data }) => {
  return (
    <div className="flex items-center md:gap-2 md:mt-2">
      <img
        alt={data.main}
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        title={data.main}
      />
      <span className="text-lg md:text-xl text-text italic font-light">
        {data.description}
      </span>
    </div>
  );
};

export default WeatherCondition;
