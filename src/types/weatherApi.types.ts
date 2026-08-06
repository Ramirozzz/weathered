export interface WeatherLocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface CurrentWeatherData {
  coord: {
    lon: number;
    lat: number;
  };

  weather: Weather[];

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  visibility: number;

  wind: {
    speed: number;
    deg: number;
  };

  clouds: {
    all: number;
  };

  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  dt: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ForecastData {
  list: ForecastItem[];
  city: {
    name: string;
    country: string;
  };
}

export interface ForecastItem {
  dt: number;

  dt_txt: string;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };

  weather: Weather[];

  wind: {
    speed: number;
  };
}

export interface AirQualityData {
  list: {
    main: {
      aqi: number;
    };

    components: {
      pm2_5: number;
      pm10: number;
      co: number;
      no2: number;
      o3: number;
    };
  }[];
}
