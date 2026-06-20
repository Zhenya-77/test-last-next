import Link from "next/link";
import css from "./search.module.css";
import WeatherSearchForm from "@/components/WeatherSearchForm/WeatherSearchForm";
import WeatherResultWidget from "@/components/WeatherResultWidget/WeatherResultWidget";

export default function SearchPage() {
  return (
    <div className={css.container}>
      <Link href="/" className={css.backLink}>
        ⬅️ На головну
      </Link>
      <h1 className={css.title}>Пошук погоди</h1>

      <WeatherSearchForm />

      <WeatherResultWidget />
    </div>
  );
}
