"use client";

import { useWeatherStore } from "@/lib/api/store/useWeatherStore";
import css from "./WeatherResultWidget.module.css";

export default function WeatherResultWidget() {
  const city = useWeatherStore((state) => state.city);
  const temperature = useWeatherStore((state) => state.temperature);

  return (
    <div className={css.card}>
      <h2>Місто: {city}</h2>
      <p className={css.temp}>Температура: {temperature}°C</p>
    </div>
  );
}
