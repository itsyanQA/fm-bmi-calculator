import { BmiLimitation } from "..";
import "./bmi-limitation-second-row.scss";
import AgeIcon from "@assets/icon-age.svg?react";
import MuscleIcon from "@assets/icon-muscle.svg?react";

export function BmiLimitationSecondRow() {
  return (
    <div className="bmi-limitation-second-row">
      <BmiLimitation
        Icon={AgeIcon}
        title="age"
        description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
      />
      <BmiLimitation
        Icon={MuscleIcon}
        title="muscle"
        description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
      />
    </div>
  );
}
