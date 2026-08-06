import { useState } from "react";
import type { WeatherLocation } from "../types/weatherApi.types";
import { useWeather } from "../hooks/useWeather";
import Hero from "../components/Hero/Hero";
import CurrentWeather from "../components/weather/CurrentWeather";
import CurrentWeatherLoading from "../components/Loading/CurrentWeatherloading";
import DailyForecast from "../components/weather/DailyForecast";
import WeatherStats from "../components/weather/WeatherStats";
import { useForecast } from "../hooks/useForecast";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<WeatherLocation | null>(
    null,
  );

  const {
    data: weather,
    isLoading: isWeatherLoading,
    isError,
  } = useWeather(selectedCity?.lat ?? 0, selectedCity?.lon ?? 0);

  const { data: dailyForecast, isLoading: isForecastLoading } = useForecast(
    selectedCity?.lat ?? 0,
    selectedCity?.lon ?? 0,
  );

  if (!selectedCity) {
    return <Hero onCitySelect={setSelectedCity} />;
  }

  if (isWeatherLoading || isForecastLoading) {
    return <CurrentWeatherLoading />;
  }

  if (isError || !weather || !dailyForecast) {
    return <p>Couldn't load weather data.</p>;
  }

  return (
    <>
      <CurrentWeather data={weather} city={selectedCity} />
      <WeatherStats data={weather} />
      <DailyForecast forecast={dailyForecast} />
    </>
  );
};

export default HomePage;
