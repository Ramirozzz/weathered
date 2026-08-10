import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { WeatherLocation } from "../types/weatherApi.types";
import { useWeather } from "../hooks/useWeather";
import Hero from "../components/Hero/Hero";
import CurrentWeather from "../components/weather/CurrentWeather";
import CurrentWeatherLoading from "../components/Loading/CurrentWeatherLoading";
import DailyForecast from "../components/weather/DailyForecast";
import WeatherStats from "../components/weather/WeatherStats";
import { useForecast } from "../hooks/useForecast";
import HourlyForecast from "../components/weather/HourlyForecast";
import SunriseSunset from "../components/weather/SunriseSunset";
import { useSearchCities } from "../hooks/useSearchCities";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCity, setSelectedCity] = useState<WeatherLocation | null>(
    null,
  );

  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const city = searchParams.get("city") ?? "";

  const {
    data: cities,
    isLoading: isCitiesLoading,
    isError: isCitiesError,
  } = useSearchCities(city);

  const {
    data: weather,
    isLoading: isWeatherLoading,
    isError: isWeatherError,
    refetch: refetchWeather,
  } = useWeather(selectedCity?.lat ?? 0, selectedCity?.lon ?? 0);

  const {
    data: dailyForecast,
    isLoading: isForecastLoading,
    isError: isForecastError,
    refetch: refetchForecast,
  } = useForecast(selectedCity?.lat ?? 0, selectedCity?.lon ?? 0);

  const handleSelectedCity = (city: WeatherLocation) => {
    setSelectedCity(city);
    setSelectedDay(null);

    setSearchParams({
      city: city.name,
    });
  };

  // Get the selected city from the URL after page reload
  useEffect(() => {
    if (city && cities?.length && !selectedCity) {
      setSelectedCity(cities[0]);
    }
  }, [city, cities, selectedCity]);

  // Set today's date as default selected day when forecast data loads
  useEffect(() => {
    if (dailyForecast && !selectedDay) {
      const today = dailyForecast.list[0].dt_txt.split(" ")[0];

      setSelectedDay(today);
    }
  }, [dailyForecast, selectedDay]);

  // Filter 3-hour forecast data for the currently selected day
  const hourlyForecast =
    selectedDay && dailyForecast
      ? dailyForecast.list.filter((item) => item.dt_txt.startsWith(selectedDay))
      : [];

  const handleRefetch = () => {
    refetchWeather();
    refetchForecast();
  };

  if (city && isCitiesLoading) {
    return <CurrentWeatherLoading />;
  }

  if (city && isCitiesError) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4">
        <p className="text-lg text-red-500">
          Something went wrong while searching for the city.
        </p>
      </div>
    );
  }

  if (city && !isCitiesLoading && !cities?.length) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center gap-4">
        <p className="text-lg text-red-500">Couldn't find that city.</p>
      </div>
    );
  }

  if (!selectedCity) {
    return <Hero onCitySelect={handleSelectedCity} />;
  }

  if (isWeatherLoading || isForecastLoading) {
    return <CurrentWeatherLoading />;
  }

  if (isWeatherError || isForecastError || !weather || !dailyForecast) {
    return (
      <div className="relative flex min-h-[600px] flex-col items-center justify-center gap-4">
        <p className="text-lg text-red-500 font-normal ">
          Couldn't load weather data.
        </p>

        <button
          onClick={handleRefetch}
          className="rounded-sm border border-border px-6 py-2 text-sm text-text hover:border-white transition-all duration-300"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <CurrentWeather data={weather} city={selectedCity} />
      <WeatherStats data={weather} />
      <SunriseSunset data={weather} />
      <DailyForecast
        forecast={dailyForecast}
        onDaySelect={setSelectedDay}
        selectedDay={selectedDay}
      />
      <HourlyForecast key={selectedDay} hourly={hourlyForecast} />
    </div>
  );
};

export default HomePage;
