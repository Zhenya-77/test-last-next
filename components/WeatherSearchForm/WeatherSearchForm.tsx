"use client";

import { useWeatherStore } from "@/lib/api/store/useWeatherStore";
import css from "./WeatherSearchForm.module.css";

export default function WeatherSearchForm() {
  const fetchWeatherBySearch = useWeatherStore(
    (state) => state.fetchWeatherBySearch
  );

  const handleSubmit = (formData: FormData) => {
    try {
      const city = formData.get("city")?.toString().trim();

      if (!city) return;
      fetchWeatherBySearch(city);
    } catch (error) {}
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input type="text" className={css.input} name="city" />
      <button type="submit" className={css.button}>
        Знайти
      </button>
    </form>
  );
}
