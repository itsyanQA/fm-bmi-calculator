import { FunctionComponent, SVGProps } from "react";
import "./bmi-limitation.scss";

type BmiLimitationProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export function BmiLimitation(props: BmiLimitationProps) {
  const { Icon, title, description } = props;

  return (
    <div className="bmi-limitation">
      <div className="bmi-limitation__header">
        {<Icon />}
        <h3>{title}</h3>
      </div>
      <p className="bmi-limitation__description">{description}</p>
    </div>
  );
}
