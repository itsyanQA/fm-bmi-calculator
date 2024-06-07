import { RECOMMENDATIONS } from "src/data/data";
import "./recommendation-list.scss";
import { Recommendation } from "@features/recommendations";

export function RecommendationsList() {
  return (
    <div className="recommendations-list">
      {RECOMMENDATIONS.map((recommendation) => (
        <Recommendation
          Icon={recommendation.icon}
          title={recommendation.title}
          description={recommendation.description}
        />
      ))}
    </div>
  );
}
