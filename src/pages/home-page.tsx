import "./home-page.scss";
import { Header } from "@components/ui/header";
import { BmiResultMeaning } from "@features/bmi-result-meaning";
import { RecommendationsList } from "@features/recommendations";

export function HomePage() {
  return (
    <main>
      <Header />
      <BmiResultMeaning />
      <RecommendationsList />
    </main>
  );
}
