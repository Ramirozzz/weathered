import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});

export const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
