import "./home-page.scss";
import { BmiLimitations } from "@components/ui/bmi-limitations/bmi-limitations";
import { Header } from "@components/ui/header";
import { BmiResultMeaning } from "@features/bmi-result-meaning";
import { RecommendationsList } from "@features/recommendations";

export function HomePage() {
  return (
    <main>
      <Header />
      <BmiResultMeaning />
      <RecommendationsList />
      <BmiLimitations />
    </main>
  );
}
