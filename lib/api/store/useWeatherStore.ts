import { create } from "zustand";
import { getLocationByIp, getWeather } from "../weatherApi";

export interface WeatherStoreProps {
  city: string;
  temperature: number | null;
  status: "idle" | "loading" | "success" | "error";
  fetchWeatherByLocation: () => void;
  fetchWeatherBySearch: (cityName: string) => void;
}

export const useWeatherStore = create<WeatherStoreProps>()((set) => ({
  city: "",
  temperature: null,
  status: "idle",
  errorMessage: "",
  fetchWeatherByLocation: async () => {
    set({ status: "loading" });
    try {
      const currentLocation = await getLocationByIp();
      const weather = await getWeather(currentLocation);
      set({
        city: currentLocation.city,
        temperature: weather,
        status: "success",
      });
    } catch (error) {
      set({ status: "error" });
    }
  },
  fetchWeatherBySearch: async (cityName: string) => {
    try {
      const weather = await getWeather({ city: cityName });
      set({
        city: cityName,
        temperature: weather,
        status: "success",
      });
    } catch (error) {
      set({ status: "error" });
    }
  },
}));
