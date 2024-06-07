import { FunctionComponent, SVGProps } from "react";
import "./recommendation.scss";

type RecommendationProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export function Recommendation(props: RecommendationProps) {
  const { Icon, title, description } = props;

  return (
    <div className="description">
      <Icon />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
