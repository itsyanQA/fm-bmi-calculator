import { BmiLimitation } from "..";
import "./bmi-limitation-third-row.scss";
import RaceIcon from "@assets/icon-race.svg?react";
import PregnancyIcon from "@assets/icon-pregnancy.svg?react";

export function BmiLimitationThirdRow() {
  return (
    <div className="bmi-limitation-third-row">
      <BmiLimitation
        Icon={PregnancyIcon}
        title="pregnancy"
        description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
      />
      <BmiLimitation
        Icon={RaceIcon}
        title="race"
        description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
      />
    </div>
  );
}
