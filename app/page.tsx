"use client";

import Link from "next/link";
import css from "./page.module.css";
import { useWeatherStore } from "@/lib/api/store/useWeatherStore";
import { useEffect } from "react";
import WeatherResultWidget from "@/components/WeatherResultWidget/WeatherResultWidget";

export default function Home() {
  const fetchWeatherByLocation = useWeatherStore(
    (state) => state.fetchWeatherByLocation
  );

  useEffect(() => {
    fetchWeatherByLocation();
  }, [fetchWeatherByLocation]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Ваша місцева погода</h1>

      <WeatherResultWidget />

      <div style={{ marginTop: "25px" }}>
        <Link href="/search" className={css.link}>
          Шукати погоду в інших містах ➡️
        </Link>
      </div>
    </div>
  );
}
